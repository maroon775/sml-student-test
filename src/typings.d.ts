interface CSSModule {
  [className: string]: string;
}

declare module "*.less" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.css" {
  const cssModule: CSSModule;
  export = cssModule;
}


declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.eot";
declare module "*.svg";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
