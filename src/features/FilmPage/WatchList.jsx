import styled from 'styled-components';

const StyledWatchList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-black-750);
  border-radius: 12px;
  transition: outline-color var(--transition);
  outline: 2px solid transparent;
  outline-offset: 4px;

  &:hover {
    outline-color: var(--color-black-150);
  }
`;

function WatchList({ watch_list }) {
  return (
    <StyledWatchList>
      {watch_list.map(li => (
        <List key={li.platform}>
          <a href={li.url} target="_blank">
            <Icon src={`/${li.icon}`} />
          </a>
          <p>{li.price}</p>
        </List>
      ))}
    </StyledWatchList>
  );
}

export default WatchList;
