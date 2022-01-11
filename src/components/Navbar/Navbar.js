import React from "react";
import styled from "styled-components";
import "./Navbar.scss";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const Container = styled.div`
  height: 60px;
  /* background: black; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 700;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <IoMdSearch style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopit.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <MdOutlineShoppingCart className="menu-icon" />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
