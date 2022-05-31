const PlayerCard = (props) => {
  const { name, initiative, bonus, setPlayers } = props;

  const deletePlayer = () => {
    setPlayers((currentPlayers) => {
      const playerRemoved = currentPlayers.filter((player) => {
        return player.name !== name;
      });
      return [...playerRemoved];
    });
  };
  return (
    <p className="player-card">
      <strong>
        <span className="total">{initiative + bonus}</span> = ({initiative} +{" "}
        {bonus})
      </strong>
      {" " + name + " "}
      <button onClick={deletePlayer} className="delete">
        Delete
      </button>
    </p>
  );
};
export default PlayerCard;
