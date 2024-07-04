import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import {useSetting} from "../../hooks/useSetting.js";
import Spinner from "../../ui/Spinner.jsx";

function UpdateSettingsForm() {
    const {isLoading,error,settings:{minBookingLength,maxBookingLength,maxGuestPerBooking,breakfastPrice}={}}=useSetting()

    if (isLoading) return <Spinner/>

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
