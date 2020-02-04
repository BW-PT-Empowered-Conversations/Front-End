import React, { useEffect } from "react";
import styled from "styled-components";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import empowered from "./Counter";


function HomePage(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.setLoggedIn();
      localStorage.setItem("userInfo", props.userInfo.username);
      localStorage.setItem("id", props.userInfo.id);
    }
  }, []);

  return (
    <div>
      {props.isLoggedIn ? (
        // <Dashboard />
        <div className="dashboard">
          <h1>HOME</h1>
          <empowered-conversation />
          <empowered-conversation />
        </div>
      ) : (
        <div className="signin-signup">
          <StyledHeader>
            Begin your chat today!
          </StyledHeader>
          <StyledP>Returning user?</StyledP>
          <Signin />
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
  setLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const StyledP = styled.p`
  color: red;
  font-size: 1.5rem;
`;

const StyledHeader = styled.h2`
  color: red;
  font-size: 2.5rem;
  border-bottom: 1px solid red;
  border-top: 1px solid red;
  padding: 20px;
  margin-top: -10px;
`;