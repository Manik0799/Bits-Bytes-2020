import React, {useState} from "react"
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


function ModalComponent({data, setModalData}) {
    console.log(data.text, data.blogimages)

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    return(
        <div>
            <Button color="danger" onClick={toggle}>Show Modal</Button>
           <Modal isOpen={modal} toggle={toggle} size = "lg" scrollable = "true">
            <ModalHeader toggle={toggle}>{data.title}</ModalHeader>
            <ModalBody>
                {data.text}
                {data.text}
                {data.text}
            </ModalBody>
            
          </Modal> 
        </div>
    )
}

export default ModalComponent