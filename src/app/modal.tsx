import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
};

export function ModalComp() {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={
        "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      }
    >
      <div
        className="flex flex-col items-center   "
        style={{ height: 300, width: 400 }}
      >
        {/* Title */}
        <div className="flex flex-col items-center  w-full ">
          <div className="flex flex-row items-center justify-center ">
            <p className="text-2xl font-bold text-black">Teşekkürler</p>
            <button
              type="button"
              className=" absolute right-5 top-5 bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={closeModal}
            >
              <span className="sr-only">Close menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr
            className="
          w-1/2
          my-2
          border-2
          border-green-400
          border-solid
          rounded-lg"
          />

          <div>
            <p className="text-black text-center">
              Oy tutanağınızı gönderdiğiniz için teşekkür ederiz. Oy tutanağınız
              incelendikten sonra onaylanacaktır.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
