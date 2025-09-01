import { useFetch } from "../hooks/useFetch"
import Education from "../components/EducationCard";
import csslogo from "../assets/skills/css-3-svgrepo-com.svg";
import gitlogo from "../assets/skills/git-icon-logo-svgrepo-com.svg";
import htmllogo from "../assets/skills/html-5-svgrepo-com.svg"
import javascriptlogo from "../assets/skills/javascript-svgrepo-com.svg"
import reactlogo from "../assets/skills/react-svgrepo-com.svg"
import tailwindlogo from "../assets/skills/tailwind-svgrepo-com.svg";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

export default function About(){

    const { data , error , loading } = useFetch('education.json');

    if(loading) return <Loading />
    if(error) return <p className="mt-40 text-center">something went wrong</p>
    return <> { data && <section>
        <div className="flex justify-between items-center ">
        <div className="w-full  px-8 flex flex-col gap-2 py-30  ">
            <div className="">
                <h1 className="text-font-3 text-3xl ">FRONTED</h1>
                <h1 className="text-font-4 text-3xl ml-4">DEVELOPER</h1>
            </div>
            <p className="max-w-[65ch]">Hi, <b>I’m <span className="text-font-3">Cyprian Kujur</span></b>, a React Developer passionate about creating fast, responsive, and user-friendly web applications. 
            I enjoy turning ideas into interactive experiences with React, 
            JavaScript, and modern web technologies.</p>
        </div>
        <div className="w-full flex justify-center max-[1000px]:hidden ">
            <motion.img
            initial={{
                scale : 0,
            }}
            animate={{
                scale : 1,
                rotate : 360
            }}
            transition={{
                scale : {
                    duration : .3
                },
                rotate : {
                    duration : 2,
                    repeat : Infinity,
                    ease : "linear"
                }
            }}
             className="h-50" src={reactlogo} />
        </div>
    </div>



    {/* skills */}
    <div className="p-4 py-20 flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-16">
            <div className="flex gap-16 justify-center items-center max-[500px]:flex-wrap">
                <img className="icon" src={gitlogo} alt="" />
                <img className="icon" src={htmllogo} alt="" />
                <img className="icon" src={csslogo} alt="" />
                <img  className="icon" src={javascriptlogo} alt="" />
            </div>
            <div className="flex gap-16 justify-center items-center">
                <img  className="icon" src={reactlogo} alt="" />
                <img  className="icon" src={tailwindlogo} />
            </div>
        </div>
    </div>



    {/* education */}
    <div className="p-4 py-60 flex flex-col gap-4 ">
        <h1 className="text-center">Education</h1>
        <div className="flex gap-8 justify-center flex-wrap">
            { data.map((education,index)=>{
                return <Education key={index} education={education}/>
            }) }
        </div>
    </div>
    </section> }
   </>
}