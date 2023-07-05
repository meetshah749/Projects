import { useState } from "react"
const Testest = () =>
{
    
    const [count,setCount] = useState(0);
    const [username,setUsername] = useState("");
    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {() => {setCount(count + 1)}} >Increment</button>
            <input placeholder="Enter a Username" onChange={(event) => {setUsername(event.target.value)}} />
            <h1>{username}</h1>
        </div>
    )
}
export default Testest