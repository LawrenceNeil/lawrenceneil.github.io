import styled from "styled-components";

export const Dashboard = styled.div`
  background-color: var(--gray);
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    height: 95vh;
    width: 95vw;
    background: var(--black);
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 150px auto;
    overflow: hidden;
    color: #f5f5f5;
    align-items: center;

    .main_content {
      background: #f5f5f5;
      height: 98%;
      width: 98%;
      padding: 2rem;
      border-radius: 2rem;
    }
  }
`;
