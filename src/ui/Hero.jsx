import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHero = styled.section`
  width: 100%;
  /* border-radius: 24px; */
  aspect-ratio: 4 / 1;

  ${props => `background-image: url(/${props.src});`}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media only screen and (max-width: 1080px) {
    aspect-ratio: 3 / 1;
  }

  @media only screen and (max-width: 610px) {
    aspect-ratio: 2.25 / 1;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  padding: 96px 64px;

  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    transparent 70%
  );
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-family: var(--font-family-logo);
  font-weight: 1000;
`;

const About = styled(Link)`
  padding: 16px 48px;
  font-weight: 600;
  border-radius: 1000px;
  background-color: var(--color-red-600);
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--color-red-700);
  }
`;

function Hero({ to, linkTitle, src = 'hero.gif' }) {
  // return (
  //   <StyledHero src={src}>
  //     <Div>
  //       <h1>
  //         <Logo to="/">🍿GUBLERNATION</Logo>
  //       </h1>
  //       <About to={to}>{linkTitle}</About>
  //     </Div>
  //   </StyledHero>
  // );

  return (
    <StyledHero src={src}>
      <Div />
    </StyledHero>
  );
}

export default Hero;
