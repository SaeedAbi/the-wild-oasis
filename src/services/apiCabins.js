import supabase from "./supabase.js";
import {id} from "date-fns/locale";

export async function getCabins(){
    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error){
        console.error(error)
        throw new Error('cabin could not be loaded')
    }
return data
}


export async function deleteCabin(id){
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        console.error(error)
        throw new Error('cabin could not be deleted')
    }
}