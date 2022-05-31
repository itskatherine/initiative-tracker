const ProgressCombat = (props) => {
  const { setPlayers } = props;
  const progressCombat = () => {
    setPlayers((currentPlayers) => {
      const currentPlayersCopy = [...currentPlayers];
      const firstPlayer = currentPlayersCopy.shift();
      currentPlayersCopy.push(firstPlayer);
      return [...currentPlayersCopy];
    });
  };
  return <button onClick={progressCombat}>Next</button>;
};

export default ProgressCombat;
