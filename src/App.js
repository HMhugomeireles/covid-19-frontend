import React from "react";
import { useFetch } from "./hooks/useFetch";
import Status from "./components/Status";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import Emoji from "./components/Emoji";

const ContainerApp = styled.div`
  text-align: center;
  width: 100%;
  overflow: auto;

  h1 {
    margin: 30px 0;
  }
`;

function App() {
  const { data, loading } = useFetch(
    "https://covid19.mathdro.id/api",
    "https://covid19.mathdro.id/api/countries/PT"
  );

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  const [world, portugal] = data;

  return (
    <ContainerApp>
      <div>
        <h1>
          <Emoji role="img" ariaLabel="microbe" emoji={"🦠"} />
          COVID-19
        </h1>
        <p>
          <Emoji role="img" ariaLabel="date" emoji={"📅"} />
          Last Update: <b>{Date(world.lastUpdate).toString()}</b>
        </p>
      </div>
      <Status title="World" data={world} emoji="🌎" />
      <Status title="Portugal" data={portugal} />
      <Footer>Data Served from John Hopkins University CSSE</Footer>
    </ContainerApp>
  );
}

export default App;
