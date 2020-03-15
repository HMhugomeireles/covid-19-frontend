import React from "react";
import styled from "styled-components";
import Emoji from "./Emoji";

const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
const CardTitle = styled.div`
  text-align: center;
`;

const CardInfo = styled.div`
  margin: 10px;
  padding: 10px 20px;
  color: #fff;
  border-radius: 20px;
  min-width: 80px;
  background: rgb(5, 1, 77);
  background: linear-gradient(
    41deg,
    rgba(5, 1, 77, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  text-align: center;

  span,
  p {
    width: 100%;
  }

  span {
    font-size: 2.5rem;
  }
`;

const DisplayData = props => (
  <Container>
    <div>
      <CardTitle>Confirmed</CardTitle>
      <CardInfo>
        <Emoji role="img" aria-label="Confirmed" emoji={"😷"} />
        <p>{props.confirmed}</p>
      </CardInfo>
    </div>
    <div>
      <div>
        <CardTitle>Recovered</CardTitle>
        <CardInfo>
          <Emoji role="img" aria-label="Recovered" emoji={"😃"} />
          <p>{props.recovered}</p>
        </CardInfo>
      </div>
    </div>
    <div>
      <div>
        <CardTitle>Deaths</CardTitle>
        <CardInfo>
          <Emoji role="img" aria-label="Deaths" emoji={"☠️"} />
          <p>{props.deaths}</p>
        </CardInfo>
      </div>
    </div>
  </Container>
);

export default DisplayData;
