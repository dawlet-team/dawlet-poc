import React from "react";
import { remote } from "electron";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import MonacoEditor from "react-monaco-editor";
import SplitPane from "react-split-pane";
// @ts-ignore
import Pane from "react-split-pane/lib/Pane";
import { SheetMusicViewer } from "@dawlet/ui";
// @ts-ignore
import sampleFile from "./sample.xml"; // FIX_ME: hackie escape
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import { bindCommands } from "./editor/commands";

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
  console.log(sdk)
  const group = await sdk.CreateGroup({ id: 'my-group' })
  console.log('created group', group)
  await sdk.PushNote({
        pushNoteInput: {
              groupId: 'my-group',
              notes: [
                    {
                          freq: 440,
                          duration: 0,
                          offset: 0,
                    }
              ]
        }
  })
  const allGroups = await sdk.ListAllGroups()
  console.log('all groups', allGroups)
      `;
  console.log({data})

  const onDidMount = (editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    bindCommands(editor)
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
