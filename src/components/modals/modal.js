import ModalForm from "./modalForm"

const Modal = (props) => {
  return (
    <div className="col-12 customModal">
        <ModalForm closeModal={props.closeModal} ModalAnimation={props.ModalAnimation}/>
    </div>
  )
}

export default Modal