import { useState } from "react";
const Assistant = () =>
{
const [input,setInput] = useState("");
const [output,setOutput] = useState("");
const sendMessage = (message) => {
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer sk-8gaYDwHQYIcmLlkfzIttT3BlbkFJoSwkPI7FWs4he9uxhAm0b",
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        messages: [
          { role: "system", content: "You are a budget assistant" },
          { role: "user", content: input },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setOutput(data.choices[0].message.content);
        //setMessages([...messages, data.choices[0].message.content]);
      })
      .catch((error) => {
        // Handle errors
      });
  };
    return (
        <div className="assistant">
            <input placeholder="Enter Information In Which You Need Help" 
            onChange={(event) => {
                setInput(event.target.value);
            }}
            />
            {input}

            <button onClick={() => {
                sendMessage(input)

            }}>
                Submit
            </button>
            {output}
        </div>
    )
}
export default Assistant;    