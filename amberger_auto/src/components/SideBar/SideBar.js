import React from "react";
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoutes } from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about' onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to='services' onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to='contactus' onClick={toggle}>
            Contact
          </SideBarLink>
          <SideBarLink to='signup' onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes to='/signin'>Sign In</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
