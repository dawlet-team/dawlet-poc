import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { groupsToSmf } from "@dawlet/utils/lib/midi"
import { initDawletSdk } from '@dawlet/graphql'
import { writeFileSync } from 'fs'
import { join } from 'path'

const sdk = initDawletSdk()

export const bindCommands = (editor: monaco.editor.IStandaloneCodeEditor) => {
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
    run() {
      exec(editor.getValue())
    }
  });

  editor.addAction({
    id: 'export-midi',
    label: 'export midi',
    keybindings: [
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_M
    ],
    async run() {
      const { listAllGroups } = await sdk.ListAllGroups()
      const midi = groupsToSmf(listAllGroups)
      writeFileSync(join(process.cwd(), 'tmp.mid'), midi, {encoding: 'binary'})
    }
  })
};

function exec(code: string) {
  const ctx = `
(async function() {
  ${code}
})()
`
  eval(ctx)
}