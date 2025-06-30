import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
 
  
 
 

const CreateRoom = ({clickFun ,InpBtn}) => {
  
 const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [roomId, setRoomId] = useState("");

  const handleCreateRoomClick = () => {
    setShowInput(true);
  };
   
  const handleJoinRoom = () => {
    alert(`Joining room: ${roomId}`);
    // Navigate or socket logic goes here
    navigate('/play');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white p-4">
     
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="flex  justify-between">
          <h1 className="text-3xl font-bold text-center pl-12">Skribbl Room</h1>
             <span onClick={clickFun} className="cursor-pointer">X</span>
        </div>
        {!showInput  && InpBtn ? (
         
         <>
         <input className="text-center" type="text" value={123123e234} />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleCreateRoomClick}
          >
            Generate Private URL
          </button> 
         </>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full p-2 rounded bg-blue-700 text-white placeholder-white"
            />

            <button
              onClick={handleJoinRoom}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
            
            >
              Join Room
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRoom;
