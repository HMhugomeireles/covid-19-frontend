import React from "react";
import DisplayData from "./DisplayData";
import Chart from "./Chart";
import styled from "styled-components";
import Emoji from "./Emoji";

const StatusContainer = styled.div`
  margin: 0 auto;
  max-width: 650px;
  text-align: center;
  overflow-y: hidden;

  h3 {
    margin: 50px 0;
    font-size: 1.5rem;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Status = props => {
  const { confirmed, recovered, deaths } = props.data;
  return (
    <StatusContainer>
      <h3>
        <Emoji role="img" ariaLabel={props.title} emoji={props.emoji} />
        {props.title}
      </h3>
      <DisplayData
        confirmed={confirmed.value}
        recovered={recovered.value}
        deaths={deaths.value}
      />
      <ChartContainer>
        <Chart data={props.data} />
      </ChartContainer>
    </StatusContainer>
  );
};

export default Status;
