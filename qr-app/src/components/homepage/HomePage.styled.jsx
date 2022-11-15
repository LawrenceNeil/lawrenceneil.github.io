import styled from "styled-components";

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  width: 100%;
  background-color: var(--black);
  color: #f5f5f5;

  .logo {
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
      color: #f5f5f5;

      &:hover {
        color: #f5f5f5;
      }
    }

    a {
      text-decoration: none;

      .logoname {
        font-size: 1.5rem;
        font-weight: 700;
        color: #f8d49a;
        font-family: "Courgette", cursive;
      }
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin: 0 1rem;
      font-size: 1.2rem;
      font-weight: 400;
      color: #f5f5f5;
      cursor: pointer;

      .active {
        color: #f8d49a;

        &:after {
          width: 100%;
        }
      }
      a {
        text-decoration: none;
        color: #f5f5f5;
        text-transform: uppercase;
        gap: 0.5rem;

        &:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: var(--orange);
          transition: width 0.3s;
        }

        &:hover {
          color: #f8d49a;

          &:after {
            width: 100%;
          }
        }
      }
    }
  }

  .loginbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 400;
    background: var(--orange);
    color: #f5f5f5;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #f5f5f5;
      text-transform: uppercase;
    }

    &:hover {
      background-color: #f5f5f5;
      color: var(--black);

      a {
        color: var(--orange);
      }
    }
  }
`;

export const ContentArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #f5f5f5;
`;
