import { IpcMainEvent } from 'electron'
export  namespace DawletIPC {
  export enum events {
    SPAWN_DAWLET = "SPAWN_DAWLET"
  }
  export type spawnDawlet = (event: IpcMainEvent, name: string) => void
}