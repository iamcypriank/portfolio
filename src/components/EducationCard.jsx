export default function Education({ education }){

    return <div className=" min-w-[300px] p-4 border bg-accent-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        <h2 className="font-bold ">{education.degree}</h2>
        <p className="font-medium">{education.institute}</p>
        <p className="font-medium">{education.duration}</p>
    </div>
}