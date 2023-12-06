import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useQueryParams<
  T extends { [key: string]: string } = { [key: string]: string }
>(): Partial<T> {
  const searchParams = useSearchParams();
  const parameter: Record<string, string> = {};

  return useMemo(() => {
    searchParams.forEach((value, key) => {
      parameter[key] = value ?? undefined;
    });

    return parameter as T;
  }, [parameter]);
}
