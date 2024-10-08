import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateSetting as updateSettingApi} from "../services/apiSettings.js";

export function useEditSetting(){
const queryClient=useQueryClient()

const {mutate:updateSetting,isLoading:isEditing}= useMutation({
    mutationFn:updateSettingApi,
    onSuccess:()=>{
        toast.success('Setting successfully edited')
        queryClient.invalidateQueries({
            queryKey:['settings']
        })
    },
    onError:(err)=>toast.error(err.message)
})
    return {isEditing,updateSetting}
}
