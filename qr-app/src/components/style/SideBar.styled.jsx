import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 5px 10px 15px 10px;

  overflow: hidden;
  .sidebar {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
    header {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      .image-text {
        display: flex;
        align-items: center;
        justify-content: center;
        .image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          background-color: var(--gray);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .text {
          margin-left: 10px;
          .name {
            font-size: 1.2rem;
            font-weight: 600;
          }
          .profession {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
    .menu-bar {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .menu {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .search-box {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          border-radius: 10px;
          background-color: #f5f5f5;
          color: var(--gray);

          input {
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;
            color: var(--gray);
            font-size: 0.8rem;
            font-weight: 400;
            outline: none;
          }
        }

        .menu-links {
        }
      }
      .bottom-content {
        margin-top: 20px;
      }
    }
    .icon {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;
