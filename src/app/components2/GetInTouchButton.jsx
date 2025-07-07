'use client';
import { useState } from 'react';
import ContactModal from './ContactModal';

const GetInTouchButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-semibold transition duration-300"
      >
        Get In Touch
      </button>

      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default GetInTouchButton;
