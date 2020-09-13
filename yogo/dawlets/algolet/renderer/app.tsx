import { SheetMusicViewer } from "@dawlet/ui";
import { ipcRenderer, remote } from "electron";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import { join } from 'path';
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-apollo";
import MonacoEditor from "react-monaco-editor";
import SplitPane from "react-split-pane";
// @ts-ignore
import Pane from "react-split-pane/lib/Pane";
import { bindCommands } from "./editor/commands";
import { MusicXMLBuilder } from '@dawlet/utils/lib/musicXmlBuilder'

const title = remote.getCurrentWindow().getTitle();
const initialCode = `
/* ${title} */
await builder.clear()
builder
    .addPitch(60)
    .addPitch(62)
    .addLens(300)
    .addLens(300)

await builder.eval()
`

const musicXmlBuilder = new MusicXMLBuilder()
const App = () => {
  const [editor, setEditor] = useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)
  const [score, setScore] = useState<string>('')
  const [code, setCode] = useState(initialCode)
  const appContainerDivRef = useRef<HTMLDivElement>(null);
  const dndAreaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onDragStart(event) {
      event.preventDefault()
      const filePath= join(process.cwd(), 'tmp.mid')
      ipcRenderer.send('ondragstart', filePath)
    }
    if (dndAreaRef.current) {
      dndAreaRef.current.addEventListener('dragstart', onDragStart)
    }
    return () => {
      dndAreaRef.current.removeEventListener('dragstart', onDragStart)
    }
  }, [dndAreaRef.current])

  const onDidMount = (_editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    setEditor(_editor)
    _editor.focus();
    const onEvalEnd = ({ groups, code }) => {
      setCode(code)
      const [group] = groups //TODO: render multiple groups
      const score = musicXmlBuilder.convertDawletGroupToXmlScore(group)
      const scoreStr = musicXmlBuilder.render(score)
      setScore(scoreStr)
      if (appContainerDivRef.current) {
        appContainerDivRef.current.classList.add("flash-effect")
        setTimeout(() => {
          appContainerDivRef.current.classList.remove("flash-effect")
        }, 300)
      }
    }
    bindCommands(_editor, onEvalEnd);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }} ref={appContainerDivRef}>
      <SplitPane split="vertical" onChange={() => {
        if (editor) {
          editor.layout()
        }
      }}>
        <Pane>
          <div id="monaco-wrapper" style={{ height: "100vh" }}>
            <MonacoEditor
              language="javascript"
              theme="vs-dark"
              value={code}
              options={{
                selectOnLineNumbers: true,
                automaticLayout: true,
              }}
              editorDidMount={onDidMount}
            />
          </div>
        </Pane>
        <Pane>
          <div style={{ height: "100%" }} ref={dndAreaRef} draggable>
            <SheetMusicViewer options={{ autoResize: true }} file={score} />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default App;
