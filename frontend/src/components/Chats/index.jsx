import { useState } from "react";

const messages = [
  { user: "Kalp Shah", text: "guessed the word!", type: "success" },
  { user: "Ff", text: "guessed the word!", type: "success" },
  { user: "Thatgurrl", text: "joined the room!", type: "info" },
  { user: "diagram", text: "joined the room!", type: "info" },
  { user: "Feeling nthg", text: "Wth", type: "normal" },
  { user: "Cyfer", text: "liked the drawing!", type: "info" },
];

const ChatBox = () => {

  const [Data , setData] = useState(messages)
  return (
    <div className="w-1/5 bg-white text-black p-2 border-l-2 border-black flex flex-col justify-between">
      <div className="overflow-y-auto h-[450px] mb-2 flex flex-end flex-col">
        {Data?.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm mb-1 ${
              msg.type === "success"
                ? "text-green-600"
                : msg.type === "info"
                ? "text-gray-500"
                : "text-black"
            }`}
          >
            <strong>{msg?.user}</strong> {msg?.text}
          </div>
        ))}
        <h1>Hello World...</h1>
      </div>
    <form className="flex ">
        <input
        type="text"
        placeholder="Type your guess here..."
        className="w-full border border-gray-300 px-2 py-1 text-sm"
      />
      <input type="submit" name="" id="" />
    </form>
    </div>
  );
};

export default ChatBox;
