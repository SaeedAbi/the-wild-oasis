import React, {useState} from 'react';
import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

const Addcabin = () => {
    const [isOpenModal,setIsOpenModal]=useState(false)

    return (
        <div>
            <Button onClick={()=>setIsOpenModal(show=>!show)}>Add new Cabin</Button>
            {isOpenModal && <CreateCabinForm/>}
        </div>
    );
};

export default Addcabin;