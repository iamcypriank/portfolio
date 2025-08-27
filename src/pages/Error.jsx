import { useNavigate } from "react-router"
import Button from "../components/Button"

export default function Error(){
    const navigate = useNavigate();

    return<div className="p-4 flex justify-center items-center h-screen bg-[#7277D2] ">
        <div className="flex flex-col gap-1 p-4 py-10 bg-[#F1E8EB] border-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]" >
            <h1 className="text-4xl">Oops</h1>
            <p>The resource you are looking for doesnt exists</p>
            <Button onClick={()=>{
                navigate('/');
            }}>Home</Button>
        </div>
    </div>
}