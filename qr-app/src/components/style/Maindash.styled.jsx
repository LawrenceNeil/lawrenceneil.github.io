import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 300px;

  .main {
    /* background: var(--pink); */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .header {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;

      .title {
        h2 {
          font-size: 1.5rem;
          color: var(--black);
        }
      }
    }

    .banner {
      height: 100px;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--black);
      border-radius: 1rem;
      margin-top: 0.5rem;

      .text {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 2rem;
        color: #f5f5f5;

        .small-text {
          font-size: 0.8rem;

          span {
            font-size: 0.8rem;
          }
        }

        .big-text {
          font-size: 1.2rem;
          margin-top: 1rem;

          span {
            font-size: 1.2rem;
          }
        }
      }

      .image {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          height: 150px;
          width: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .activities {
      height: 250px;
      width: 90%;
      background-color: var(--gray);
      margin-top: 0.5rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .cards {
      height: 50px;
      width: 90%;
      background-color: var(--gray);
      margin-top: 0.5rem;
      border-radius: 1rem;
    }
  }
  .right {
    background: var(--purple);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      color: #f5f5f5;
    }
    .calendar {
      background: var(--black);
      height: 200px;
      width: 250px;
      border-radius: 2rem;
      margin-top: 2rem;
    }
    .announcements {
      background: #f5f5f5;
      height: 100px;
      width: 250px;
      border-radius: 2rem;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
