import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div>Test Modal</div>,
    document.getElementById("root-modal")
  );
};

export default Modal;
