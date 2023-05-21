import { useEffect } from "react";



const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Cars Shop`;
    },[title])
}

export default useTitle;