import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux"
import {useHistory} from 'react-router-dom';

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
  const history=useHistory()
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });

  const registration = e => {
    e.preventDefault();
    props.login(form);
    props.signin(form);
    props.getUser(props.userInfo.id);
  };

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  // //const handleSubmit = (values, tools) => {
  //   //axios.post('https://bw-emp.herokuapp.com/api/login', values)
  //     .then(response => {
  //       setMessage(response.data.message);
  //       tools.resetForm();
  //     })
  //     .catch()
  //     .finally(() => {
  //       tools.setSubmitting(false);
  //     })
  // }

  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Sign Up</HeaderStyle>

          <Button variant="btn btn-success" onClick={() => history.push('/signup')}>
            Sign Up 
            </Button>
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