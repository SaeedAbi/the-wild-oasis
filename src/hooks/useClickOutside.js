import {useEffect} from "react";

export function useClickOutside(ref,handler){

useEffect(function (){
    function handleClick(e){
        if (ref.current && !ref.current.contains(e.target)) {
            return handler()
        }
    }

    document.addEventListener('click',handleClick,true)

    return ()=> document.removeEventListener('click',handleClick,true)
}, [ref,handler]);
}
