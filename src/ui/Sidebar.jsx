import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Bookmark from '../svg/Bookmark';
import ChefHat from '../svg/ChefHat';
import Mail from '../svg/Mail';
import Media from '../svg/Media';

const StyledSidebar = styled.aside`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 36px;
  border-right: 1px solid var(--color-black-750);

  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-family: var(--font-family-logo);
  font-weight: 1000;
  margin-bottom: 36px;

  @media only screen and (max-width: 1280px) {
    font-size: 18px;
  }
`;

const SidebarLink = styled(NavLink)`
  &.active {
    background-color: var(--color-red-600);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > li > a {
    display: flex;
    align-items: center;
    gap: 8px 12px;
    padding: 16px;
    font-weight: 600;
    border-radius: 1000px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--color-red-600);
    }
  }
`;

const Social = styled.div``;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo to="/">🍿GUBLERNATION</Logo>
      <nav>
        <NavList>
          <li>
            <SidebarLink to="/">
              <Media />
              <span>Filmography</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/about">
              <Bookmark />
              <span>About</span>
            </SidebarLink>
          </li>
          <li>
            <a href="https://sxltair.tistory.com" target="_blank">
              <ChefHat />
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a href="https://spinspin.net/sxltair" target="_blank">
              <Mail />
              <span>Feedback</span>
            </a>
          </li>
        </NavList>
      </nav>
    </StyledSidebar>
  );
}

export default Sidebar;
