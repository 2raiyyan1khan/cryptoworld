import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 10px 0;
  background-color: #181818;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
`;
export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & h2 {
    color: #6f6bfa;
    font-family: "Dancing Script", cursive;
    font-weight: 500;
    margin: 0;
  }

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & li {
      margin-left: 10px;
      text-transform: uppercase;
      padding: 10px 15px;
      border-radius: 5px;
      transition: 0.3s;
      &:hover {
        background-color: #706bfa27;
      }
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const MenuButton = styled.button`
  background: transparent;
  border: 2px solid #6f6bfa;
  padding: 5px 15px;
  display: none;
  color: #6f6bfa;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
