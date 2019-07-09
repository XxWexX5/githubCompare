import styled from "styled-components";

export const StyleCompareList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 10px 0 0 0;
  color: #333;
  border-radius: 3px;
  margin: 20px 7px 0;

  @media screen and (max-width: 660px) {
    min-width: 200px;
  }

  .group-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;

    .btn {
      flex: 1;
      padding: 10px 0;
      color: #fff;
      text-transform: capitalize;
      cursor: pointer;

      &.btn-refresh {
        background-color: #4a91f2;
      }

      &.btn-danger {
        background-color: #9a384d;
      }
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      font-size: 1.8em;
      text-transform: capitalize;
    }

    small {
      text-transform: lowercase;
      font-size: 1.2em;
      color: #888;
    }

    img {
      width: 50px;
      margin-bottom: 5px;
    }
  }

  ul {
    list-style: none;
    font-size: 1.6em;
    line-height: 2.5em;

    li {
      display: flex;
      flex-direction: row;
      font-weight: bold;
      padding: 0 60px 0 20px;

      &:nth-child(2n - 1) {
        background-color: #dddddd;
      }

      small {
        font-weight: normal;
        color: #a1a1a1;
        margin-left: 3px;
      }
    }
  }
`;
