import InitInput from "./InitInput";
import TurnOrder from "./TurnOrder";
import OrderListButton from "./OrderListButton";
import { useState } from "react";

let players = [
  { name: "katherine", initiative: 10, bonus: -2 },
  { name: "tim", initiative: 8, bonus: 2 },
  { name: "zanna", initiative: 12, bonus: 3 },
  { name: "caz", initiative: 18, bonus: 0 },
  { name: "dad", initiative: 15, bonus: -1 },
];

const InitArea = () => {
  const [playerList, setPlayers] = useState(players);

  return (
    <>
      <InitInput setPlayers={setPlayers}></InitInput>
      <TurnOrder playerList={playerList} setPlayers={setPlayers}></TurnOrder>
      <OrderListButton setPlayers={setPlayers}></OrderListButton>
    </>
  );
};

export default InitArea;
