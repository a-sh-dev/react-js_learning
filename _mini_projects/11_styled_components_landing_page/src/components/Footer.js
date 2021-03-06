import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde quam inventore impedit quae odit!
            </li>
            <li>+61 3 8888 8888</li>
            <li>hello@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; {year} Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
