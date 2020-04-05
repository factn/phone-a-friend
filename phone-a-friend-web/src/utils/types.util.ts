export function as<T>(val: any) {
  return (val as unknown) as T;
}
