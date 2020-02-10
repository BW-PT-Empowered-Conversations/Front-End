import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";

const DivStyle = styled.div`
  margin: 10px auto;
  width: 450px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 7px #888888;
`;

const buttonStyle = {
  color: "white",
  background: "green",
  width: "200px",
  margin: "10px auto",
  borderRadius: "10px",
  boxShadow: "4px 4px 7px #888888"
};

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 5px auto;
`;

const HeaderStyle = styled.h2`
  color: red;
`;

function Login(props) {
  const [form, setForm] = React.useState({
    //sets state of the form to empty fields
    username: "", //user name is Nil
    password: "" //password is Nil
  });
  const validateForm = () => {
    let username = form.username;
    if (username.length < 5) {
      alert("Longer username needed");
    }
  };
 // const [userError, setUserError] = useState();

  const login = e => {
    validateForm();
    e.preventDefault(); //method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form.
    //props.login(form);////

    axios
      .post("https://bw-emp.herokuapp.com/api/login", form)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setForm({
          username: "",
          password: ""
        });
      })
      .catch()
      .finally(() => {
        // tools.setSubmitting(false);
      });
  };

  const handleChanges = e => {
    //event object
    setForm({ ...form, [e.target.name]: e.target.value }); //uses the spread operator to update the keys on our state object. It changes the value of username or pw one key at a time.
  };

  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Log In</HeaderStyle>

          <form onSubmit={login}>
            {" "}
            {/* onsubmit calls the method login  */}
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
                name="password" //input name
                type="password" //input type
                value={form.password} //the value of the input
                onChange={handleChanges} //anytime the field changes it will call handlechanges which uses a method to input each keystroke
                placeholder="Password" //input placeholder
                required
              />
            </div>
            <Button style={buttonStyle} type="submit" fluid>
              Log In
            </Button>
          </form>
        </FormDiv>
      </DivStyle>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    userInfo: { ...state.userInfo }
  };
}

const mapDispatchToProps = {
  //signin,
  //getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
