import PlayerCard from "./PlayerCard";

const TurnOrder = (props) => {
  const { playerList } = props;
  // const orderedPlayerList = playerList.sort((a, b) => {
  //   return a.initiative - b.initiative;
  // });
  const playerCards = playerList.map((player) => {
    return (
      <PlayerCard
        key={player.name} //change this
        name={player.name}
        initiative={player.initiative}
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
