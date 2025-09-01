import githubicon from "../assets/icon/github-142-svgrepo-com.svg";
import liveicon from "../assets/icon/live-svgrepo-com.svg";
import { motion } from "motion/react"

export default function ProjectCard({ project ,index }){
    const pastelPalette = [
        "#A7E9F2", 
        "#B5EAD7", 
        "#C7CEEA", 
        "#FFDAC1", 
        "#FFB7B2", 
        "#E2F0CB", 
        "#F6C1E9", 
        "#D5E8F6", 
        "#FCD5CE", 
        "#F8E1F4"  
    ];
    
    return <motion.div
    initial={{
        scale : 0 , 
        opacity : 0,
        filter : "blur(4px)"
    }}
        
    animate={{ 
        scale : 1 ,
        opacity : 1,
        filter : "blur(0px)"
        
    }}
    transition={{
        scale : {
            duration : .3
        }
    }}
    whileHover="hovering"
    

    style={{ background : pastelPalette[index%pastelPalette.length] }} 
    className="flex flex-col gap-1 p-4 border-[1px] shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
        <img className="w-[300px] border-1 rounded-md" src={project.poster} alt="" />
        
        
        {/* proeject card */}
        <div className="flex flex-col gap-1">
            <h2 className="font-bold text-xl">{project.title}</h2>  
            <div className="flex justify-between">
            <motion.a 
            variants={{
                hovering :{
                    x : [10,0]
                }
            }}
            
            className="hover:scale-105 active:scale-95 px-2 p-1 bg-black text-white flex gap-1 items-center text-sm" href={project.github} target="_blank"><img className="h-[16px]" src={githubicon} />GitHub</motion.a>
            <motion.a  
            variants={{
                hovering :{
                    x : [-10,0]
                }
            }}
            className="hover:scale-105 active:scale-95 px-2 p-1 bg-black text-white flex gap-1 items-center text-sm" href={project.live} target="_blank"><img className="h-[16px]" src={liveicon} />Live</motion.a>
        </div>
        </div>
    </motion.div>
}