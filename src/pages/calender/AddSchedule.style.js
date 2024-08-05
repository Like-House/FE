import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  margin: 50px 70px;
  gap: 30px;
`;

const Content = styled.div`
  display: flex;`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;

  padding: 40px 60px;

  width: 80%;
  gap: 20px;

  label {
  }

  input {
    border: none;
    margin-bottom: 30px;
    width: 400px;
    outline: none;
  }

  textarea {
    border: none;
    width: 500px;
    height: 100px;
    outline: none;
    resize: none;
  }
`;

const Type = styled.div`
  width: 500px;
  height: 250px;

  margin-bottom: 20px;
`;

const Button = styled.div`
  margin-top: auto;
  margin-left: 30px;
`;

export {Container, Content, Button, Form, Type}