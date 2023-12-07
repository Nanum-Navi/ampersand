import debounce from 'lodash.debounce';
import { useEffect, useMemo } from 'react';
import { usePreservedCallback } from './usePreservedCallback';
import { usePreservedReference } from './usePreservedReference';

// 타입 에러로 인한 인터페이스 선언
interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
  flush(): ReturnType<T> | undefined;
}

export function useDebounce<F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof debounce>[2] = {}
): DebouncedFunc<F> {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(options);

  const debounced = useMemo(() => {
    return debounce(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, preservedOptions, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
