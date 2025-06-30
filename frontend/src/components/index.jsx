import Navbar from './Navbar/index';
import Users from './UserBar/index'; 
import ChatBox from './Chats/index';
import DrawingTools from "./DrawingTools/index"

const index = () => {
  return (
    <div className='flex justify-center items-center bg-blue-900 pt-4'>
       <div className="min-h-screen w-[90vw]  text-center bg-blue-900 bg-[url('/pattern.svg')] bg-repeat relative text-white">
      <Navbar />
      <div className="flex gap-2">
        <Users /> 
        
 <DrawingTools  /> 
        <ChatBox />
      </div>
      
    </div>
    </div>
  )
}

export default index
