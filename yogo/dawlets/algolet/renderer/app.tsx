import { SheetMusicViewer } from "@dawlet/ui";
import { gql } from "apollo-boost";
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
// @ts-ignore
import sampleFile from "./sample.xml"; // FIX_ME: hackie escape

const LIST_ALL_GROUPS = gql`
  query {
    listAllGroups {
      id
      notes {
        id
        freq
        duration
        offset
      }
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery(LIST_ALL_GROUPS);
  const [editor, setEditor] = useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)
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

  if (loading) return <div>Loading...</div>;
  if (error) console.error(error);
  const title = remote.getCurrentWindow().getTitle();
  const code = `
  /* ${title} */
  const group = await sdk.CreateGroup({ id: 'my-group' })
  await sdk.PushNote({
        pushNoteInput: {
              groupId: 'my-group',
              notes: [
                    {
                          freq: 440,
                          duration: 40,
                          offset: 0,
                    }
              ]
        }
  })
  const allGroups = await sdk.ListAllGroups()
      `;

  const onDidMount = (_editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    setEditor(_editor)
    _editor.focus();
    bindCommands(_editor);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
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
            <SheetMusicViewer options={{ autoResize: true }} file={sampleFile} />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default App;
