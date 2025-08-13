import { useNavigate } from "react-router"

function Homepage() {
  
    const navigate = useNavigate();

  return (
    <>
    <div className="flex h-screen items-center justify-center">
     <div className="flex flex-col gap-2">
        <button className="w-[200px] text-black bg-white border-1" onClick={() => navigate("/maintask")}>Main Filter</button>
        <button className="w-[200px] text-black bg-white border-1" onClick={() => navigate("/optionaltask")}>Optional Filter </button>
     </div>
    </div>
    </>
  )
}

export default Homepage;