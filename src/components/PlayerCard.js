const PlayerCard = (props) => {
  const { name, initiative, setPlayers } = props;
  const deletePlayer = () => {
    setPlayers((currentPlayers) => {
      const playerRemoved = currentPlayers.filter((player) => {
        return player.name !== name;
      });
      return [...playerRemoved];
    });
  };
  return (
    <p>
      <strong>{initiative}</strong>
      {" " + name + " "}
      <button onClick={deletePlayer}>Delete</button>
    </p>
  );
};
export default PlayerCard;
