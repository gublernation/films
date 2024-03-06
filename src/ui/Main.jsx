import styled from 'styled-components';

const StyledMain = styled.main`
  width: 80%;
  margin: 56px auto;
  /* width: 960px;
  margin: 0 auto;
  padding: 32px;
  border: 2px solid var(--color-black-0);
  border-radius: 16px;
  transform: translateY(-60px);
  background-color: var(--color-black-100); */
`;

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
