import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#A62440">Apply Cources</Button>
            <Button bg="#a62440">Talk to Adviser</Button>
          </div>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
