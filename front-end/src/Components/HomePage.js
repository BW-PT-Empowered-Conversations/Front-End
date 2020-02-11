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
          <StyledHeader>Start Talking Today!</StyledHeader>
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
  color: Black;
  font-size: 1.5rem;
  text-align: center;
`;

const StyledHeader = styled.h2`
  color: Black;
  background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);

  font-size: 2.5rem;
  text-align: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 20px;
  margin-top: -10px;
`;
