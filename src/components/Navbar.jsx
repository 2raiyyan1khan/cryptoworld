import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNavbar, StyledNav, MenuButton } from "./styles/Navbar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Container } from "./styles/Container";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <StyledNavbar>
      <Container>
        <StyledNav>
          <Link to="/">
            <h2>CryptoWorld</h2>
          </Link>
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
          <MenuButton onClick={() => setToggleSidebar((prev) => !prev)}>
            {toggleSidebar ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </MenuButton>
        </StyledNav>
      </Container>
      <Sidebar isOpen={toggleSidebar} />
    </StyledNavbar>
  );
};

export default Navbar;
