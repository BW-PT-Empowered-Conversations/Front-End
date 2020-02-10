import React from "react";
import styled from "styled-components";
import Signup from "./Signup";
import { connect } from "react-redux";
import Login from "./Login";

function HomePage(props) {

 return (
    <div>
      {props.isLoggedIn ? (
        // <Dashboard />
        <div className="dashboard">
          <h1>HOME</h1>
          <empowered-conversation />
        </div>
      ) : (
        <div className="login-signup">
          <StyledHeader>
            Start Talking Today!
          </StyledHeader>
          <StyledP>Returning user?</StyledP>
          <Login />
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
  color: green;
  font-size: 1.5rem;
`;

const StyledHeader = styled.h2`
  color: green;
  font-size: 2.5rem;
  border-bottom: 1px solid green;
  border-top: 1px solid green;
  padding: 20px;
  margin-top: -10px;
`;