import React from "react";
import styled from "styled-components";
import "./Navbar.scss";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ width: "50px" })}
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
  ${mobile({ fontSize: "24px" })}
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SignLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CountContainer = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -6px;
  right: -7px;
`;

const Count = styled.h4`
  font-size: 11px;
  font-weight: 400;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <IoMdSearch style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoLink to="/">
            <Logo>Shopit.</Logo>
          </LogoLink>
        </Center>
        <Right>
          <SignLink to="/signup">
            <MenuItem>SIGN UP</MenuItem>
          </SignLink>
          <SignLink to="/signin">
            <MenuItem>SIGN IN</MenuItem>
          </SignLink>
          <CartLink to="/cart">
            <MenuItem>
              <MdOutlineShoppingCart className="menu-icon" />
              {quantity > 0 && (
                <CountContainer>
                  <Count>{quantity}</Count>
                </CountContainer>
              )}
            </MenuItem>
          </CartLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
