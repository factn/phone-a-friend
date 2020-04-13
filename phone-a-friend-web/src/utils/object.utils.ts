// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmptyObject(obj: any): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
