import supabase, {supabaseUrl} from "./supabase.js";
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

export async function createEditCabin(newCabin,id){
    const hasImagePath=newCabin.image?.startsWith?.(supabaseUrl)

    const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll('/','')
    const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    let query=supabase.from('cabins')

    //create cabin
    if (!id) query=query.insert([{...newCabin ,image:imagePath}])


    //edit cabin
    if (id) query= query.update({ ...newCabin,image:imagePath })
        .eq('id',id)

    const {data,error}=await query.select().single()

    if (error) {
        console.error(error)
        throw new Error('cabin could not be created')
    }

    const { error:storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)

        console.error(storageError)
        throw new Error('Cabin image could not be uploaded and the cabin didnt created')
    }

    return data
}