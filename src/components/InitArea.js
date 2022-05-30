import InitInput from "./InitInput";
import TurnOrder from "./TurnOrder";
import { useState } from "react";

let players = [
  { name: "katherine", initiative: 10 },
  { name: "tim", initiative: 8 },
  { name: "zanna", initiative: 12 },
  { name: "caz", initiative: 18 },
  { name: "dad", initiative: 15 },
];

const InitArea = () => {
  const [playerlist, setPlayers] = useState(players);

  return (
    <>
      <InitInput setPlayers={setPlayers}></InitInput>
      <TurnOrder playerList={playerlist}></TurnOrder>
    </>
  );
};

export default InitArea;
