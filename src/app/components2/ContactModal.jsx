// "use client";
// import UMForm from "@/components/form";
// import ContactForm from "./ContactForm";

// const ContactModal = ({ show, onClose }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4">
//       <div className="relative bg-white w-full max-w-3xl rounded-2xl p-4 sm:p-6 shadow-2xl">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-red-600"
//         >
//           &times;
//         </button>
//         <UMForm />
//       </div>
//     </div>
//   );
// };

// export default ContactModal;

"use client";
import UMForm from "@/components/form";

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside the modal
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl p-4 sm:p-6 shadow-2xl"
        onClick={handleModalClick}
      >
        <UMForm />
      </div>
    </div>
  );
};

export default ContactModal;
