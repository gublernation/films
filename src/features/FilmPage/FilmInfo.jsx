import styled from 'styled-components';

const StyledFilmInfo = styled.blockquote`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 24px;
  row-gap: 24px;
  margin-top: -24px;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--color-black-780);
`;

const Title = styled.p`
  font-weight: 600;
  letter-spacing: 12px;
`;

const Content = styled.p`
  font-size: 15px;
`;

const Genre = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & > span {
    display: inline-block;
    padding: 8px;
    font-size: 15px;
    border-radius: 8px;
    background-color: var(--color-black-700);
  }
`;

function FilmInfo({ year, genre, act, description }) {
  return (
    <StyledFilmInfo>
      <Title>개봉</Title>
      <Content>{year}</Content>
      <Title>배역</Title>
      <Content>{act}</Content>
      {genre.length > 0 && (
        <>
          <Title>장르</Title>
          <Genre>
            {genre.map(item => (
              <span key={item}>{item}</span>
            ))}
          </Genre>
        </>
      )}
      {description && (
        <>
          <Title>비고</Title>
          <Content>{description}</Content>
        </>
      )}
    </StyledFilmInfo>
  );
}

export default FilmInfo;
