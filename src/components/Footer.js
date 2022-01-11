import { FaPinterest, FaTwitter, FaHome } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopit.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <RiFacebookFill style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <SiInstagram style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest style={{ fontSize: "20px" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaHome style={{ marginRight: "10px", fontSize: "20px" }} /> 622 Dixie
          Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <FiPhone style={{ marginRight: "10px", fontSize: "20px" }} /> +1 234
          56 78
        </ContactItem>
        <ContactItem>
          <MdMailOutline style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
          contact@shop.it
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
