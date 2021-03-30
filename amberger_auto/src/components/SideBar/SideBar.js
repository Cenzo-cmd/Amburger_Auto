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
          <SideBarLink to='services' onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to='location' onClick={toggle}>
            Location
          </SideBarLink>
          <SideBarLink to='contact' onClick={toggle}>
            Contact
          </SideBarLink>
          <SideBarLink to='about' onClick={toggle}>
            About Us
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes to='contact'>Call Us</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
