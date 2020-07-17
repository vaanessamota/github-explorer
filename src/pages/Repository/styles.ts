import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        line-height: 23px;
        margin-top: 4px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: block;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }
    /*
    & representa um elemento
    sempre que houver um a precidido deste a aplicar o margin-top,
    assim é possível espaçar os itens da lista
    */

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

// export const RepositoryInfo = styled.div`
//   margin-top: 79px;
//   display: flex;
//   align-items: center;

//   img {
//     border-radius: 50%;
//     width: 104px;
//     height: 104px;
//   }

//   div {
//     align-items: center;
//     margin-left: 32px;

//     strong {
//       font-family: Roboto;
//       font-weight: bold;
//       font-size: 36px;
//       line-height: 42px;
//       font-style: normal;
//       color: #3d3d4d;
//     }

//     p {
//       font-family: Roboto;
//       font-size: 20px;
//       line-height: 23px;
//       font-style: normal;
//       color: #737380;
//     }
//   }
// `;

// export const RepoStats = styled.div`
//   display: flex;
//   margin-top: 24px;

//   div {
//     margin-right: 64px;

//     strong {
//       font-family: Roboto;
//       font-size: 36px;
//       line-height: 42px;
//       color: #3d3d4d;
//     }

//     p {
//       font-family: Roboto;
//       font-size: 20px;
//       line-height: 23px;
//       color: #6c6c80;
//     }
//   }
// `;

// export const RepoContainer = styled.div`
//   margin-top: 56px;
//   align-items: center;
//   width: 960px;
//   height: 112px;
//   display: flex;
//   background-color: #ffffff;
//   border-radius: 5px;

//   div {
//     flex: 1;
//     margin-left: 24px;

//     strong {
//       font-family: Roboto;
//       font-style: normal;
//       font-weight: bold;
//       font-size: 24px;
//       line-height: 28px;
//       color: #3d3d4d;
//     }

//     p {
//       margin-top: 10px;
//       font-family: Roboto;
//       font-style: normal;
//       font-weight: normal;
//       font-size: 18px;
//       line-height: 21px;
//       color: #a8a8b3;
//     }
//   }

//   svg {
//     color: #cbcbd6;
//   }
// `;
