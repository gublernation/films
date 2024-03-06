import styled from 'styled-components';

import ChevronDown from '../svg/ChevronDown';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const StyledFilter = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  border: 2px solid var(--color-black-750);
  border-radius: 12px;
`;

const Content = styled.p``;

const Icon = styled.span`
  ${props =>
    props.active &&
    `& > svg {
  transform: rotate(180deg);
}`}
`;

const Modal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  border: 2px solid var(--color-black-750);
  border-radius: 12px;
  background-color: var(--color-black-800);
  z-index: 2;

  & > button {
    width: 100%;
    text-align: left;
    padding: 16px 14px;
  }

  & > button:not(:last-child) {
    border-bottom: 2px solid var(--color-black-750);
  }
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(() =>
    searchParams.get('filter') ? searchParams.get('filter') : 'year'
  );

  console.log(filter);

  const filters = [
    { id: 1, filter: '개봉일순', param: 'year' },
    { id: 2, filter: '별점순', param: 'rating' },
    { id: 3, filter: '알파벳순', param: 'alphabetical' },
  ];

  function handleFilter(param) {
    setFilter(param);

    searchParams.set('filter', param);
    setSearchParams(searchParams);

    setModal(false);
  }

  return (
    <StyledFilter>
      <FilterButton onClick={() => setModal(cur => !cur)}>
        <Content>
          {filters.filter(val => val.param === filter).at(0)?.filter}
        </Content>
        <Icon active={modal}>
          <ChevronDown />
        </Icon>
      </FilterButton>
      {modal && (
        <Modal>
          {filters
            .filter(val => val.param !== filter)
            .map(val => (
              <button key={val.id} onClick={() => handleFilter(val.param)}>
                {val.filter}
              </button>
            ))}
        </Modal>
      )}
    </StyledFilter>
  );
}

export default Filter;
