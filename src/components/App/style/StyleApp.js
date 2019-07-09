import styled from "styled-components";

export const StyleAppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 30px;

  .label-error {
    color: #5b161a;
    font-size: 1.4em;
    font-weight: bold;
  }

  @media screen and (max-width: 660px) {
    margin: 20px 0;
    justify-content: inherit;
  }
`;

export const StyleAppForm = styled.form`
  margin: 20px 0;
  display: flex;

  input {
    width: 250px;
    padding: 10px;
    font-size: 14px;
    border-radius: 3px;
    border: ${props => (props.withError ? "2px solid #EC3848" : "0")};
  }

  button {
    background-color: #58d68d;
    color: #ffffff;
    font-size: 20px;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 3px;

    &:hover {
      background-color: #50bf7e;
      cursor: pointer;
    }
  }
`;

export const StyleGeneralCompareList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;
