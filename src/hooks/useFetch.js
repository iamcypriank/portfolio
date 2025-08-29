import { useState, useEffect } from "react"


export const useFetch =(path,option="")=>{
    const [ data ,  setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);

    useEffect(()=>{
        setLoading(true);
        setError(null);
        const getData = async()=>{
            try{
            const response = await fetch(path);
            if(!response.ok) throw new Error('something went wrong!');
            let dataRes  = await response.json();
            if(option && option!='all'){
                dataRes = dataRes.filter((item)=>{
                    return item.type==option;
                })
            }
            setData(dataRes);
            }catch(err){
                setError(err.message);

            }finally{
                setLoading(false);
            }
        }

        getData();
    },[option])

    return {
        data, error, loading
    }
}