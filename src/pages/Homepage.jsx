import styled from 'styled-components';
import FilmList from '../features/FilmList';
import Hero from '../ui/Hero';

const StyledHomepage = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin: 56px auto;
`;

function Homepage() {
  return (
    <div>
      <Hero to="/about" linkTitle="About" />
      <StyledHomepage>
        <FilmList />
      </StyledHomepage>
    </div>
  );
}

export default Homepage;
