import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

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
    precondition: null,
    keybindingContext: null,
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 1.5,
    run() {
      // TODO: eval and query/mutate gql
      console.log('eval all', editor.getValue())
    }
  });
};