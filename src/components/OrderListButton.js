const OrderListButton = (props) => {
  const { setPlayers } = props;

  const orderPlayerList = () => {
    setPlayers((currentPlayers) => {
      const orderedPlayerList = currentPlayers.sort((a, b) => {
        return a.initiative + a.bonus - (b.initiative + b.bonus);
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
