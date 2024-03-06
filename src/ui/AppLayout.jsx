import styled from 'styled-components';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Nav from './Nav';

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-template-rows: auto 1fr;
  overflow-y: scroll;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 280px 1fr;
  }

  @media only screen and (max-width: 1080px) {
    display: block;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Nav />
      <Sidebar />
      {/* <Main> */}
      <Outlet />
      {/* </Main> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
