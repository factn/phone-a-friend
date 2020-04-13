export function as<T>(val: unknown) {
  return (val as unknown) as T;
}
