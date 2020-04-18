import React from "react";
import { remote } from "electron";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import MonacoEditor from "react-monaco-editor";
import SplitPane from "react-split-pane";
// @ts-ignore
import Pane from "react-split-pane/lib/Pane";
import { SheetMusicViewer } from "@dawlet/sheetmusic-viewer";
// @ts-ignore
import sampleFile from "./sample.xml"; // FIX_ME: hackie escape
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

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

  if (loading) return <div>Loading...</div>;
  if (error) console.error(error);
  const title = remote.getCurrentWindow().getTitle();
  const code = `
      /* ${title} */
      const pitch = Math.floor(Math.random() * 60)
      `;
  console.log({data})

  /**
   * TODO:
   * should send mutations on enter or something.
   */
  const onChange = (e: any) => {
    console.log("onchange");
    console.log(e);
  };
  const onDidMount = (editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    console.log("ondidmount");
  };

  return (
    <SplitPane split="vertical">
      <Pane>
        <div id="monaco-wrapper" style={{ height: "100%", opacity: 0.9 }}>
          <MonacoEditor
            language="javascript"
            theme="vs-dark"
            value={code}
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
            }}
            onChange={onChange}
            editorDidMount={onDidMount}
          />
        </div>
      </Pane>
      <Pane style={{ background: "white" }}>
        <SheetMusicViewer options={{ autoResize: true }} file={sampleFile} />
      </Pane>
    </SplitPane>
  );
};

export default App;
