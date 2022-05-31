import PlayerCard from "./PlayerCard";

const TurnOrder = (props) => {
  const { playerList, setPlayers } = props;
  const playerCards = playerList.map((player, index) => {
    console.log(index);
    return (
      <PlayerCard
        key={index} //change this
        name={player.name}
        initiative={player.initiative}
        bonus={player.bonus}
        setPlayers={setPlayers}
      ></PlayerCard>
    );
  });
  return (
    <div className="turn-order">
      <h2>Turn Order:</h2>
      {playerCards}
    </div>
  );
};

export default TurnOrder;
