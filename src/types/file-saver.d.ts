declare module "file-saver" {
    export function saveAs(data: Blob | File | string, filename: string): void;
  }