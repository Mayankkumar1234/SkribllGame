import React, { useRef, useState } from "react";
import { useEffect } from "react"; 
import { IoIosColorFill } from "react-icons/io";
import { FcUndo } from "react-icons/fc";


const colors = [
  "#000000", "#808080", "#c0c0c0", "#ffff99",
  "#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00", "#00ff80",
  "#00ffff", "#0080ff", "#0000ff", "#8000ff", "#ff00ff", "#ff0080",
  "#804000", "#c08040" 
];
let size =[2,4,8]

const DrawingToolbar = () => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#00000");
   const [display , setDisplay] = useState(false)
  const [lineWidth, setLineWidth] = useState(3);
   const [isDrawing, setIsDrawing] = useState(false);
   const [isErasing, setIsErasing] = useState(false);
   const [selectTool , setSelectTool] = useState("pencil")
  

    useEffect(() => {
       const canvas = canvasRef.current;
       canvas.width = 800;
       canvas.height = 500;
       canvas.style.width = "800px";
       canvas.style.height = "500px";
   
       const context = canvas.getContext("2d");
       context.lineCap = "round";
       context.strokeStyle = selectedColor;
       context.lineWidth = lineWidth;
       contextRef.current = context; 
     }, []);

const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const ctx = contextRef.current;
    ctx.strokeStyle = isErasing ? "#ffffff" : selectedColor;
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const handleFillCanvas = () => {
  const canvas = canvasRef.current;
  const ctx = contextRef.current;

  ctx.fillStyle = selectedColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};


  return (
  
    <div className="flex flex-col justify-center items-center"> 
       <div className="w-3/5 bg-white border-black border-x-2 flex items-center justify-center">
      <canvas   ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}    className="bg-white border-2 border-black cursor-crosshair">
        {/* Placeholder for drawing */}
      </canvas>
    </div>

        <div className="flex items-center bg-blue-800 px-2 py-1 space-x-2 overflow-x-auto justify-center">
      {/* Triangle tool (not interactive) */}
      <div className={`w-6 h-6 bg-white border-2 border-black rotate-45  ${selectTool === "eraser" ? "bg-pink-500" : "bg-white"}`} onClick={()=> {setIsErasing(true)
        setSelectTool("eraser")
        setLineWidth(9)
      }} ></div>

      {/* Color Palette */}
     <div className="grid grid-rows-2 grid-cols-9 gap-1">
       {colors.map((color, i) => (
        <div
          key={i}
          onClick={() => {
            setSelectedColor(color);
            setIsErasing(false);
          }
          }

          className={`w-4 h-6 cursor-pointer border ${
            selectedColor === color ? "border-yellow-300" : "border-gray-500"
          }`}
          style={{ backgroundColor: color }}
        />

      ))}
        
     </div>
      {/* Brush Dot */}
      <div className="w-6 h-6 bg-white border border-black flex items-center justify-center">
        <div onClick={()=> setDisplay(prev=> !prev)} className="w-2 h-2 bg-black rounded-full" >
          
        </div>
       
      </div>
{/* /${"border"-ele} */}
      {
       display &&  <div className="bg-zinc-200 w-22 absolute left-[50%] z-50 bottom-24 rounded-md h-[50px] flex gap-1 flex-col px-1 item-center justify-center" >
                           {
                            size && size.map((ele)=>(
                              <span onClick={()=> {setLineWidth(ele)
                                setDisplay(prev=> !prev)}
                              } className={`border-${ele}  border-black  rounded `}>

                              </span>
                            ))
                           }
        </div>
      }

      {/* Pencil Tool */}
      <div onClick={()=> {setSelectedColor("pencil")
        startDrawing()
      }} className={`w-6 h-6 ${selectTool=="pencil"?"bg-pink-500":"bg-white"} text-black font-bold flex items-center justify-center rounded`}>
        🖊️
      </div>

      {/* Fill Tool */}
      <div onClick={()=> {setSelectTool("paint")
        handleFillCanvas()
      }}  className={`w-6 h-6 ${selectTool=="paint"?"bg-pink-500":"bg-white"} text-black flex items-center justify-center border border-black rounded`}   >
      <IoIosColorFill />
      </div>

      {/* Undo Tool */}
      <div className="w-6 h-6 bg-white text-black flex items-center justify-center border border-black rounded">
        <FcUndo />
      </div>

      {/* Clear Tool */}
      <div className="w-6 h-6 bg-white text-black flex items-center justify-center border border-black rounded"   onClick={() => {
            const canvas = canvasRef.current;
            contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
          }} >
        🗑️
      </div>
      
    </div>  
    </div>
  );
};

export default DrawingToolbar;
