import React, { useEffect } from "react";
import styled from "styled-components";
//import Signin from "./Signin";
import Signup from "./Signup";
//import empowered from "./Counter";
import { connect } from "react-redux";

function HomePage(props) {

 return (
    <div>
      {props.isLoggedIn ? (
        // <Dashboard />
        <div className="Dashboard">
          <h1>HOME</h1>
          <empowered-conversation />
          <empowered-conversation />
        </div>
      ) : (
        <div className="Signup">
          <StyledHeader>
            Start Talking Today!
          </StyledHeader>
          <StyledP>Welcome</StyledP>
          <StyledP>Get started!</StyledP>
          <Signup />
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
    userInfo: { ...state.userInfo }
  };
}

const mapDispatchToProps = {
//  setLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const StyledP = styled.p`
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const StyledHeader = styled.h2`
  color: Red;
  text-align: center;
  font-size: 2.5rem;
  margin: 10px auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 7px #888888;
`;



