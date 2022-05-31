import { useState } from "react";

const InitInput = (props) => {
  const { setPlayers } = props;
  const [newPlayer, setNewPlayer] = useState("");
  const [bonus, setBonus] = useState("0");

  const handleRoll = (event) => {
    event.preventDefault();
    setPlayers((currentPlayers) => {
      const playerToAdd = {
        name: newPlayer,
        initiative: Math.ceil(Math.random() * 20),
        bonus: bonus,
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
      <p></p>
      <div>
        <button id="roll" type="submit">
          <img
            id="dice"
            src="https://static.thenounproject.com/png/362284-200.png"
          ></img>
          <p>ROLL</p>
        </button>
      </div>
      <label> Bonus </label>
      <input
        type="number"
        onChange={(event) => {
          setBonus(event.target.value);
        }}
      ></input>
    </form>
  );
};

export default InitInput;
