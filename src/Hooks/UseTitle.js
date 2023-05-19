import { useEffect } from "react";



const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Dragon New`;
    },[title])
}

export default useTitle;