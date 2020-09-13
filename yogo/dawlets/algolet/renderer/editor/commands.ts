import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { groupsToSmf } from "@dawlet/utils/lib/midi"
import { initDawletSdk } from '@dawlet/graphql'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { ListAllGroupsQuery } from "@dawlet/graphql/lib/sdk";

const sdk = initDawletSdk()

export const bindCommands = (editor: monaco.editor.IStandaloneCodeEditor, onEvalEnd: (group: unknown) => unknown) => {
  // Cmd + T
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_T, () => {
    editor.getAction('editor.action.formatDocument').run()
  })

  // Cmd + Shift + P
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_P, () => {
    editor.getAction('editor.action.quickCommand').run()
  })

  // Cmd + Shift + E
  editor.addAction({
    id: 'algolet-eval-all',
    label: 'Eval All',
    // An optional array of keybindings for the action.
    keybindings: [
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_E
    ],
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 1.5,
    async run() {
      const code = editor.getValue()
      const action = evalAsyncFunc(code)
      const groups = await action()
      const midi = groupsToSmf(groups)
      console.log("exporting midi", midi)
      writeFileSync(join(process.cwd(), 'tmp.mid'), midi, {encoding: 'binary'})
      onEvalEnd({ groups, code })
    }
  });
};

function evalAsyncFunc(code: string): () => Promise<ListAllGroupsQuery['listAllGroups']> {
  const action = `
(async function() {
  ${code}
  const { listAllGroups } = await sdk.ListAllGroups()
  return listAllGroups
})
`
  return eval(action)
}