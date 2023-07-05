function Tile(props) {
  const deleteTransaction = () => {
    console.log(props.transactions);
    const newTransactions = props.transactions.filter((item, id) => {
      if (id === props.index) {
        return false;
      } else {
        return true;
      }
    });
    console.log(newTransactions);
    props.setTransactions(newTransactions);
  };

  const updateTransaction = () => {
    const newAmount = prompt("Please Enter The Amount You Want To Change");
    console.log(newAmount);

    const newTransactions = props.transactions.map((item, id) => {
      console.log(item, id);
      if (props.index === id) {
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });

    props.setTransactions(newTransactions);
  };
  return (
    <div className="title">
      Rs {props.transaction.amount}/- {props.transaction.category}
      <div className="dd">
      <button onClick={deleteTransaction}>Delete Transaction</button>
      <button onClick={updateTransaction}>Update Transaction</button>
      </div>
    </div>
  );
}
export default Tile;
