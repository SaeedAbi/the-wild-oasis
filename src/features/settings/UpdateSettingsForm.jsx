import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import {useSetting} from "../../hooks/useSetting.js";
import Spinner from "../../ui/Spinner.jsx";
import {useEditSetting} from "../../hooks/useEditSetting.js";

function UpdateSettingsForm() {
    const {isLoading,error,settings:{minBookingLength,maxBookingLength,maxGuestPerBooking,breakfastPrice}={}}=useSetting()
    const {isEditing,updateSetting}=useEditSetting()


    if (isLoading) return <Spinner/>

    function handleUpdate(e,field){
        const {value}=e.target

        if (!value) return
        updateSetting({[field]:value})
    }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input disabled={isEditing} type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e=>handleUpdate(e,'minBookingLength')}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={e=>handleUpdate(e,'maxBookingLength')}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking} onBlur={e=>handleUpdate(e,'maxGuestPerBooking')}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e=>handleUpdate(e,'breakfastPrice')}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
