import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import Input from "../../ui/Input.jsx";
import FormRow from "../../ui/FormRow.jsx";
import {useForm} from "react-hook-form";
import {createEditCabin} from "../../services/apiCabins.js";

function CreateCabinForm({cabinToEdit={}}) {
    const {id:editID,...editValues}=cabinToEdit
    const isEditSession=Boolean(editID)

    const {register,handleSubmit,reset,getValues,formState,}=useForm({
        defaultValues:isEditSession ? editValues:{}
    })
const {errors}=formState

    const queryClient=useQueryClient()

   const {mutate:createCabin,isLoading:isCreating}= useMutation({
       mutationFn:createEditCabin,
       onSuccess:()=>{
           toast.success('new cabin successfully created')
           queryClient.invalidateQueries({
               queryKey:['cabins']
           })
           reset()
       },
       onError:(err)=>toast.error(err.message)
   })

    const {mutate:editCabin,isLoading:isEditing}= useMutation({
        mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),
        onSuccess:()=>{
            toast.success('Cabin successfully edited')
            queryClient.invalidateQueries({
                queryKey:['cabins']
            })
            reset()
        },
        onError:(err)=>toast.error(err.message)
    })

    const isWorking = isCreating || isEditing

    function onSubmit(data){
        const image=typeof data.image === 'string' ? data.image:data.image[0]

        if (isEditSession) editCabin({newCabinData:{...data,image},id:editID})
        else createCabin({...data,image:image})
    }


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Cabin name' error={errors?.name?.message} >
        <Input disabled={isWorking} type="text" id="name"  {...register('name',{
            required:"This field is required",
        })}/>

      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input disabled={isWorking} type="number" id="maxCapacity" {...register('maxCapacity',{
            required:"This field is required",
            min:{
                value:1,
                message:'Capacity should be atleast 1'
            }
        })} />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input disabled={isWorking} type="number" id="regularPrice" {...register('regularPrice',{
            required:"This field is required",
        })} />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register('discount',{
            required:"This field is required",
            validate:(value)=>value<= getValues().regularPrice || "Discount should be less than regular price"
        })} />
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register('description',{
            required:"This field is required",
        })} />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput id="image" accept="image/*" {...register('image',{
            required: isEditSession? false:"This field is required",
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cobin':'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
