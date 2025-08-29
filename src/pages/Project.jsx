import { useFetch } from "../hooks/useFetch"
import ProjectCard from "../components/ProjectCard"
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useState } from "react";

export default function Project(){
    const [ option, setOption ] = useState('all'); 
    const { data, error, loading } = useFetch('project.json',option);


    if(loading) return <Loading /> 
    if(error) return <p className="text-center mt-40">something went wrong</p>
    
    return <>
    { data && <section className="py-10 flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
            <Button onClick={()=>{
                setOption('all');
            }} customStyle={`text-sm hover:underline underline-offset-4 decoration-2 hover:text-black transition-300  ${option=='all' ? 'text-black font-bold underline ' : 'text-font-secondary-light font-medium' } `}>All</Button>
            <p>|</p>
            <Button onClick={()=>{
                setOption('reactjs');
            }} customStyle={`text-sm hover:underline underline-offset-4 decoration-2 hover:text-black transition-300  ${option=='reactjs' ? 'text-black font-bold underline ' : 'text-font-secondary-light font-medium' } `}>React js</Button>
            <p>|</p>
            <Button onClick={()=>{
                setOption('vanillajs');
            }} customStyle={`text-sm hover:underline underline-offset-4 decoration-2 hover:text-black transition-300 ${option=='vanillajs' ? 'text-black font-bold underline ' : 'text-font-secondary-light font-medium' } `}>Vanilla js</Button>
            <p>|</p>
            <Button onClick={()=>{
                setOption('htmlcss');
            }} customStyle={`text-sm hover:underline underline-offset-4 decoration-2  hover:text-black transition-300 ${option=='htmlcss' ? 'text-black font-bold underline '  : 'text-font-secondary-light font-medium' } `}>HTML + CSS</Button>
        </div>
        <div className="p-4 flex flex-wrap justify-center gap-8">{data.length==0 && <p className="mt-30">no projects found</p>}{data.map((project,index)=>{
        return <ProjectCard key={project.id} project={project} index={index} />
    })} </div></section> }
    </>
}