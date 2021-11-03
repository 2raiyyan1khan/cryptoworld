import React from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar, SidebarMenu } from "./styles/Sidebar";

const Sidebar = ({ isOpen, setToggleSidebar }) => {
  return (
    <StyledSidebar style={{ width: isOpen ? "50%" : "0" }}>
      <SidebarMenu>
        <ul>
          <li>
            <NavLink
              activeClassName="active"
              to="/"
              onClick={() => setToggleSidebar((prev) => !prev)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/cryptocurrencies"
              onClick={() => setToggleSidebar((prev) => !prev)}
            >
              Cryptocurrencies
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/news"
              onClick={() => setToggleSidebar((prev) => !prev)}
            >
              Crypto News
            </NavLink>
          </li>
        </ul>
      </SidebarMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
