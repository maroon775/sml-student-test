declare module "*.png" {
  const value: any;
  export default value;
}

declare function require(name: string): string;

declare module '*.less' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}


export interface IReduxAction {
  type: string,
  payload?: {
    [fieldKey: string]: any
  }
}
