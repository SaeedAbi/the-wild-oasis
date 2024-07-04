import {getSettings} from "../services/apiSettings.js";
import {useQuery} from "@tanstack/react-query";

export function useSetting (){
    const {isLoading,error,data:settings}=useQuery({
        queryKey:['settings'],
        queryFn:getSettings,
    })
    return {isLoading,error,settings}
}