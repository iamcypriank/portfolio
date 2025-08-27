export default function Button({ children, type="button" , onClick , customStyle="", size="md" }){
    let style = "bg-accent-primary font-medium border-1  hover:bg-[#7277D2]";

    if(customStyle){
        style=customStyle;
    }else{
        if(size=="md"){
            style+=" py-2 px-6"
        }
    }

    

    return <button 
    className={style}
    onClick={(e)=>{
        if(type!="submit"){
            e.preventDefault();
            onClick();
        }
    }}>
        { children }

    </button>
}