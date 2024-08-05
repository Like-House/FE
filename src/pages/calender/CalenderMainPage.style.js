import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;

  margin: 20px;
`;

const Schedule = styled.div`
  flex: 5;

  padding-top: 10px;
  border-right: 1px solid #e0e0e0;
`;

const Calender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-top: auto;
  }
`;

const ScheduleList = styled.div`
  margin: 40px;
  height: 450px;

  ul {
        list-style-type: none;
        padding: 0px;
    }

    li {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      transition: background-color 0.3s;
      margin-bottom: 20px;

      p {
        font-size: 14px;
        margin: 5px 0;
      }

        &:hover {
          cursor: pointer;
        }

        strong {
          font-size: 1.2em;
          color: #333;
        }
    }
`;

const RightSidebar = styled.div`
  flex: 1;
  margin: 50px;

  ul {
        list-style-type: none;
        padding-top: 40px;
    }

    li {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      transition: background-color 0.3s;
      margin-bottom: 20px;
      font-size: 12px;

      p {
        font-size: 12px;
        margin: 10px 0 0;
      }

      &:hover {
        cursor: pointer;
      }

      strong {
        font-size: 1.5em;
        color: #333;
        padding-right: 10px;
      }
    }
`;

export {Container, Schedule, Calender, ScheduleList, RightSidebar}