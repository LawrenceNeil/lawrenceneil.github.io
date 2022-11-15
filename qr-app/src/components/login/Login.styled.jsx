import styled from "styled-components";

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70%;
  width: 70%;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  .login-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    width: 400px;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .container {
    width: 400px;
    height: 400px;
    background: var(--black);
    color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: #f8d49a;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .username,
      .password {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        width: 100%;
        height: 50px;

        label {
          width: 30%;
          text-align: center;
          font-size: 1.1rem;
        }

        input {
          width: 70%;
          height: 30px;
          border: none;
          border-radius: 5px;
          padding: 0 1rem;
          outline: none;
        }
      }

      .submit {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 15px;
        background: var(--orange);
        color: #f5f5f5;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: #f5f5f5;
          color: var(--orange);
        }
      }
    }
  }
`;

export const BoxSection = styled.section`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;

  .box1 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--orange);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .box2 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--gray);
    width: 350px;
    height: 350px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .box3 {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--black);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
`;

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  overflow: hidden;
  &:last-child {
    position: relative;
    z-index: 2;
  }
`;
