const PlayerCard = (props) => {
  const { name, initiative } = props;
  return (
    <p>
      <strong>{initiative}</strong>
      {" " + name}
    </p>
  );
};
export default PlayerCard;
