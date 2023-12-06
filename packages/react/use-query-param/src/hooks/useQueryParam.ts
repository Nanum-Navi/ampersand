import { useSearchParams } from "next/navigation";

interface Options<T> {
  parser?: (val: string) => T;
  required?: boolean;
}

export function useQueryParam<T = string>(name: string): T | undefined;
export function useQueryParam<T = string>(
  name: string,
  options: Options<T> & { required: true }
): T;
export function useQueryParam<T = string>(
  name: string,
  options: Options<T>
): T | undefined;
export function useQueryParam<T = string>(name: string, options?: Options<T>) {
  const searchParams = useSearchParams();
  const value = searchParams.get(name);

  if (options?.required === true && value == null) {
    throw new Error(`${name} is required`);
  }

  if (options?.parser != null && value != null) {
    return options.parser(value);
  }

  return value;
}
