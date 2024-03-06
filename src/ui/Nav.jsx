import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 80px;
  align-items: center;
  grid-column: 1 /-1;
  padding: 0 24px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  border-bottom: 1px solid var(--color-black-750);
  background-color: var(--color-black-800);
  z-index: 9;

  display: none;

  @media only screen and (max-width: 1080px) {
    display: flex;
  }
`;

const Logo = styled(Link)`
  font-size: var(--font-size-lg);
  font-family: var(--font-family-logo);
  font-weight: 1000;

  @media only screen and (max-width: 610px) {
    display: none;
  }
`;

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  & > a {
    font-size: 15px;
    font-weight: 600;
    padding: 8px;
    border-radius: 8px;
    transition: background-color var(--transition);
  }
`;

const Links = styled(NavLink)`
  &.active {
    background-color: var(--color-red-600);
  }
`;

function Nav() {
  return (
    <StyledNav>
      <NavWrap>
        <Logo to="/">🍿 GUBLERNATION</Logo>
        <NavList>
          <Links to="/">Home</Links>
          <Links to="/about">About</Links>
          <a href="https://sxltair.tistory.com" target="_blank">
            Resources
          </a>
          <a href="https://spinspin.net/sxltair" target="_blank">
            Feedback
          </a>
        </NavList>
      </NavWrap>
    </StyledNav>
  );
}

export default Nav;
