import Button from "./styles/Button.styled";
import StyledHeader, { Logo } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src="./images/logo.png"></Logo>
      <div>
        <Button color="#A62440">Apply Cources</Button>
        <Button bg="#a62440">Talk to Adviser</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
