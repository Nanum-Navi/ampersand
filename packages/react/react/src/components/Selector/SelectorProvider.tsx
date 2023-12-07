import { PropsWithChildren, useEffect, useState } from 'react';
import { styled } from '@nanumnavi/style';
import { buildContext } from '../..';
import SelectorItem from './SelectorItem';

interface SelectorContextProps {
  selectedId: number;
  setSelectedId: (selectorId: number) => void;
}

const [SelectorProvider, useSelector] = buildContext<SelectorContextProps>('Selector');

interface SelectorListProps extends PropsWithChildren {
  defaultSelectedId?: number;
  onChange: (id: number) => void;
}

export const Selector = (props: SelectorListProps) => {
  const { children, defaultSelectedId = 0, onChange } = props;

  const [selectedId, setSelectedId] = useState<number>(defaultSelectedId);

  useEffect(() => {
    onChange(selectedId);
  }, [selectedId, onChange]);

  return (
    <SelectorProvider selectedId={selectedId} setSelectedId={setSelectedId}>
      <SelectorListContainer>{children}</SelectorListContainer>
    </SelectorProvider>
  );
};

Selector.Item = SelectorItem;

export { Selector as default, useSelector };

const SelectorListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
`;
