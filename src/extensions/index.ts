import './string';

declare global {
  // TODO: typescript 3.5 にupdateで消せる
  // type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  type ExcludeId<T> = Pick<T, Exclude<keyof T, 'id'>>;

  // for Facebook JS SDK
  interface Window {
    FB: any;
  }
}
