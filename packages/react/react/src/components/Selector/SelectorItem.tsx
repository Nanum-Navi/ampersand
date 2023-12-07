import { ReactNode } from 'react';
import { styled } from '@nanumnavi/style';

import { useSelector } from './SelectorProvider';

export interface SelectorProps {
  id: number;
  text: string;
  render?: ReactNode;
}

const SelectorItem = (props: SelectorProps) => {
  const { id, text, render } = props;

  const { selectedId, setSelectedId } = useSelector();

  const onSelect = () => {
    setSelectedId(id);
  };

  const isSelected = selectedId === id;

  return (
    <SelectorWrapper>
      <SelectorHead onClick={onSelect}>
        {isSelected ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
              stroke="#FFBF00"
              strokeWidth="7"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
              stroke="#C7CFD7"
              strokeWidth="2"
            />
          </svg>
        )}
        <SelectorText>{text}</SelectorText>
      </SelectorHead>
      <div style={{ display: isSelected ? 'block' : 'none' }}>{render}</div>
    </SelectorWrapper>
  );
};

export default SelectorItem;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SelectorHead = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin: 0 2rem;
`;

const SelectorText = styled.p`
  margin-top: 0;

  font-family: Pretendard, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.newColor.grey800};
`;
