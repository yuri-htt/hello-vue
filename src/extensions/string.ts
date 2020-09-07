export {};

declare global {
  interface String {
    isBlank(): boolean;
  }
}

String.prototype.isBlank = function () {
  if (this && this.length > 0) return false;
  return true;
};
