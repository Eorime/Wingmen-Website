import React, { useState } from "react";
import {
  Container,
  Line,
  Logo,
  NavbarContact,
  NavbarContainer,
  NavbarElement,
  NavbarServices,
  StyledLink,
} from "./style";
import LogoWhite from "../../assets/images/Logo.png";
import LogoBlue from "../../assets/images/Logo-blue.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const Navbar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = () => {
    navigate(routes.home);
  };

  return (
    <Container>
      <Logo
        onClick={handleNavigate}
        src={isHovered ? LogoBlue : LogoWhite}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <NavbarContainer>
        <StyledLink to={routes.home}>
          <NavbarElement>HOME</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink to={routes.work}>
          <NavbarElement>WORK</NavbarElement>
          <Line></Line>
        </StyledLink>
        <StyledLink to={routes.contact}>
          <NavbarContact>CONTACT</NavbarContact>
          <Line></Line>
        </StyledLink>
        <StyledLink to={routes.services}>
          <NavbarServices>SERVICES</NavbarServices>
          <Line></Line>
        </StyledLink>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;