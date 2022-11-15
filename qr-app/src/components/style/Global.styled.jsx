import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@400;500;600;800&display=swap');
  :root{
    --yellow: linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%);
    --orange: #fca61f;
    --black: #242d49;
    --gray: #788097;
    --purple: linear-gradient(180deg, #BB67FF 0%, #C484F3 100%);
    --pink: #FF919D;
    --glass: rgba(255, 255, 255, 0.54);
    --boxShadow: 0px 19px 60px rgb(0 0 0 / 8%);
    --smboxShadow: -79px 51px 60px rgba(0, 0, 0, 0.08);
    --activeItem: #f799a354;
  }
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  .App{
    /* padding: 0.5rem 3.5rem; */
    color: var(--black);
    background: linear-gradient(
      106.37deg,
      #ffe1bc 29.63%,
      #ffcfd1 51.55%,
      #f3c6f1 90.85%
    );
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .AppGlass {
      display: grid;
      height: 97%;
      width: 97%;
      background: var(--glass);
      border-radius: 2rem;
      gap: 16px;
      grid-template-columns: 11rem auto 20rem;
      overflow: hidden;

      @media screen and (max-width: 1200px){
        grid-template-columns: 10% 50% auto;
        overflow-y: scroll;
      }
      @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
      }
      .Sidebar{
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 4rem;
        transition: all 300ms ease;

        .Logo{
          display: flex;
          justify-content: center;
          align-items: center;
          .LogoName{
            font-size:32px;
          }
        }
        .bars{
          display: none;
        }
        
        .Menu{
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .MenuItem{
            display: flex;
            align-items: center;
            gap: 1rem;
            height: 2.5rem;
            margin-left: 2rem;
            position: relative;
            transition: all 300ms ease;
            border-radius: 0.7rem;
            font-size: 14px;

            &:hover{
              cursor: pointer;
            }

            &:last-child {
              position: absolute;
              bottom: 2.3rem;
              width: 100%;
            }
          }

        }

      }
    }
  }
  
`