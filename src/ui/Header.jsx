import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100dvw;
  height: 300px;
  position: relative;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;

  font-family: var(--font-family-logo);
  font-weight: 1000;
  text-transform: uppercase;

  transform: translate(-50%, -50%);

  & > a:link,
  & > a:visited {
    color: var(--color-beige-700);
    transition: color var(--transition);
  }

  & > a:hover,
  & > a:active {
    color: var(--color-beige-800);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Gublernation</Link>
      </Logo>
    </StyledHeader>
  );
}

export default Header;
