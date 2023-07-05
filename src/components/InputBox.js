const InputBox = (props) => {
  const performTask = () => {
   const newObj = {amount :props.amount, category :props.category}; 
   const newTransactions = [newObj,...props.transactions];
   //localStorage.setItem("transactions", JSON.stringify(newTransactions));
   props.setTransactions(newTransactions);   
  };

  return (
    <div className="inputbox">
      <h1>Budget Traker</h1>
      <div className="meet">
      </div>
      <input type = "number" placeholder="Enter a Amount" id="input-box" 
      onChange = {(event) => {props.setAmount(event.target.value)}} />
      <br />
      {props.amount}
      <input type="radio" name = 'category' id = "radio-button" 
      onClick={()=>{props.setCategory("Expenses")}}/> <label>Expenses</label><br />
      <input type="radio" name = 'category' id = "radio-button" 
      onClick={()=>{props.setCategory("Savings")}} /> <label>Savings</label><br />
      <button onClick={performTask}>Submit</button>
    </div>
  );
};

export default InputBox;
