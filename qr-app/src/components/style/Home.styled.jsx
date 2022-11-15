import styled from 'styled-components';

export const Headers = styled.header`
  height: 80px;
  width: 100%;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  nav{
    width: 97%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      a{
        text-decoration: none;
        span{
          color: var(--orange);
        }
        &:hover{
          color: var(--orange);
        }
      }
     }
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        list-style: none;
        margin: 0 10px;
        a{
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 500;
          &:hover{
            color: var(--orange);
          }
        }
        :last-child{
          background-color: #fff;
          line-height: 30px;
          padding: 0 10px;
          border-radius: 15px;
          a{
            color: var(--black);
          }
          &:hover{
            background-color: var(--orange);
            a{
              color: #fff;
            }
          }
        }
      }
    }
      
  }
`