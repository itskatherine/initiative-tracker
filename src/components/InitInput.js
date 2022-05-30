import { useState } from "react";

const InitInput = (props) => {
  const { setPlayers } = props;
  const [newPlayer, setNewPlayer] = useState("");

  const handleRoll = (event) => {
    event.preventDefault();
    setPlayers((currentPlayers) => {
      const playerToAdd = {
        name: newPlayer,
        initiative: Math.ceil(Math.random() * 20),
      };
      return [...currentPlayers, playerToAdd];
    });
    setNewPlayer("");
  };

  return (
    <form onSubmit={handleRoll}>
      <label>Player Name </label>
      <input
        onChange={(event) => {
          setNewPlayer(event.target.value);
        }}
        type="text"
        name="roll"
        value={newPlayer}
      ></input>
      <button type="submit">Roll!</button>
    </form>
  );
};

export default InitInput;
