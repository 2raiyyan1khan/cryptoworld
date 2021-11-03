import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: fixed;
  width: 0;
  overflow: hidden;
  height: 100%;
  background-color: #181818;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  transition: 0.3s;
`;
export const SidebarMenu = styled.div`
  margin-top: 50px;
  & ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  & li {
    padding: 10px 20px;
    color: inherit;
    transition: 0.3s;
    text-transform: uppercase;

    &:hover {
      background-color: #706bfa27;
    }
  }
`;
