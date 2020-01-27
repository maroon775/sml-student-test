export interface IReduxAction {
  type: string,
  payload?: {
    [fieldKey: string]: any
  }
}
