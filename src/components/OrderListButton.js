const OrderListButton = (props) => {
  const { setPlayers } = props;

  const orderPlayerList = () => {
    setPlayers((currentPlayers) => {
      const orderedPlayerList = currentPlayers.sort((a, b) => {
        return b.initiative + b.bonus - (a.initiative + a.bonus);
      });
      return [...orderedPlayerList];
    });
  };

  return (
    <button
      onClick={() => {
        orderPlayerList();
      }}
    >
      Order List
    </button>
  );
};

export default OrderListButton;
