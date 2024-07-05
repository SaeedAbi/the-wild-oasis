import React, {useState} from 'react';
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";

const Addcabin = () => {
    const [isOpenModal,setIsOpenModal]=useState(false)

    return (
        <div>
            <Button onClick={()=>setIsOpenModal(show=>!show)}>Add new Cabin</Button>
            {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}>
                <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/>
            </Modal>}
        </div>
    );
};

export default Addcabin;