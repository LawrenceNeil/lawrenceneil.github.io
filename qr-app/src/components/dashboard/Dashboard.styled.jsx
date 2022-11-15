import styled from "styled-components";

export const DashboardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--gray);

  .dashboard {
    height: 95vh;
    width: 95vw;
    background: var(--black);
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 150px auto;
    align-items: center;

    .sidebar {
      height: 98%;
      width: 98%;
      border-radius: 2rem 0 0 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .head {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;

        .image {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;

          img {
            height: 100%;
            width: 100%;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          color: #f5f5f5;

          .name {
            font-size: 1.2rem;
            font-weight: 600;

            &::first-letter {
              text-transform: uppercase;
            }

            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background: var(--gray);
              margin-top: 0.5rem;
            }
          }

          .profession {
            font-size: 0.8rem;
            font-weight: 400;
            margin-top: 0.5rem;
          }
        }
      }

      .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        height: 100%;
        width: 100%;

        .search-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          position: relative;

          input {
            height: 30px;
            width: 89%;
            border: none;
            border-radius: 5px;
            padding-left: 1rem;
            padding-right: 2.1rem;
            outline: none;
            font-size: 0.8rem;
            font-weight: 400;

            &::placeholder {
              color: var(--gray);
            }

            &:focus {
              box-shadow: 0 0 0 2px var(--orange);

              &::placeholder {
                color: var(--black);
              }
            }
          }

          .icon {
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--gray);
            position: absolute;
            right: 0.5rem;
            height: 100%;
            width: 30px;
            background: var(--black);
            border-radius: 0 5px 5px 0;
            color: #f5f5f5;
          }
        }

        .links {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          height: 100%;
          width: 100%;
          margin-bottom: 2rem;

          .link {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 90%;
            margin-bottom: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            a {
              background: var(--black);
              color: #f5f5f5;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              height: 100%;
              border-radius: 5px;
              transition: all 0.3s ease-in-out;

              .icon {
                height: 100%;
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px 0 0 5px;
                color: #f5f5f5;
                font-size: 1.2rem;
                margin-left: 0.5rem;
              }

              span {
                height: 100%;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: #f5f5f5;
                font-size: 1rem;
                font-weight: 600;
              }
            }

            .active {
              background: var(--yellow);
              span {
                color: var(--black);
              }
              .icon {
                color: var(--black);
              }
            }
            &:hover {
              .inactive {
                background: var(--yellow);
                span {
                  color: var(--black);
                }
                .icon {
                  color: var(--black);
                }
              }
            }
          }
        }
      }

      .bottom-content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4rem;
        width: 100%;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 90%;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          .inactive {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            text-decoration: none;

            .icon {
              height: 100%;
              width: 20%;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px 0 0 5px;
              color: #f5f5f5;
              margin-left: 0.5rem;
              font-size: 1.2rem;
            }

            span {
              height: 100%;
              width: 80%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #f5f5f5;
              font-size: 1rem;
              font-weight: 600;
            }
          }

          &:hover {
            background: var(--yellow);
            .inactive {
              span {
                color: var(--black);
              }
              .icon {
                color: var(--black);
              }
            }
          }
        }
      }
    }

    .main_content {
      background: #f5f5f5;
      height: 98%;
      width: 98%;
      border-radius: 2rem;
      color: var(--black);
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
