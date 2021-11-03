import React from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar, SidebarMenu } from "./styles/Sidebar";

const Sidebar = ({ isOpen }) => {
  return (
    <StyledSidebar style={{ width: isOpen ? "50%" : "0" }}>
      <SidebarMenu>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/currencies">
              Cryptocurrencies
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/news">
              Crypto News
            </NavLink>
          </li>
        </ul>
      </SidebarMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
