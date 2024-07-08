import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import {useBooking} from "../../hooks/useBooking.js";
import Spinner from "../../ui/Spinner.jsx";
import {HiArrowDownOnSquare, HiArrowUpOnSquare} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";
import {useCheckout} from "../../hooks/useCheckout.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import {useDeleteBooking} from "../../hooks/useDeleteBooking.js";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading}=useBooking()
  const{checkout,isCheckingOut}=useCheckout()
  const{isDeleting,deleteBooking} =useDeleteBooking()
  console.log(booking)


  const navigate=useNavigate()

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (isLoading || isCheckingOut) return <Spinner/>

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{booking?.id}</Heading>
          <Tag type={statusToTagName[booking?.status]}>{booking?.status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />



      <ButtonGroup>
        {status==='unconfirmed' && <Button icon={<HiArrowDownOnSquare/>} onClick={() => navigate(`/checkin/${booking?.id}`)}>
          Check in
        </Button>}
        {status==='checked-in' && <Button icon={<HiArrowUpOnSquare/>} onClick={()=>{checkout(booking?.id)}}>
          Check out
        </Button>}
        <Modal>
        <Modal.Open opens='delete'>
          <Button variation='danger'>Delete booking</Button>
        </Modal.Open>
        <Modal.Window name='delete'>
          <ConfirmDelete disabled={isDeleting} resourceName='booking' onConfirm={()=>{deleteBooking(booking?.id,{
            onSettled:()=>navigate(-1)
          })}}/>
        </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
