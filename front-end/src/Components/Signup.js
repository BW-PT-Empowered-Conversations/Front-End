import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux"

const buttonStyle = {
  color: "white",
  background: "green",
  width: "200px",
  margin: "10px auto",
  borderRadius: "10px",
  boxShadow: "4px 4px 7px #888888"
};

const DivStyle = styled.div`
  margin: 10px auto;
  width: 450px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 8px #888888;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 5px auto;
`;

const HeaderStyle = styled.h2`
  color: green;
`;

function Registration(props) {
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });

  const registration = e => {
    e.preventDefault();
    props.signup(form);
    props.signin(form);
    props.getUser(props.userInfo.id);
  };

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Sign Up</HeaderStyle>

          <form onSubmit={registration}>
            <div className="ui fluid input">
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={handleChanges}
                placeholder="UserName"
                required
              />
            </div>
            <div className="ui fluid input">
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChanges}
                placeholder="Password"
                required
              />
            </div>
            <Button style={buttonStyle} type="submit" fluid>
              Sign Up
            </Button>
          </form>
        </FormDiv>
      </DivStyle>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

const mapDispatchToProps = {
  // signup,
  // signin,
  // getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);