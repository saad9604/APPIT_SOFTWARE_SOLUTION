'use client';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const page = window.location.href;
    const formData = { ...data, phone, page };

    try {
      setLoading(true);

      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Form submitted successfully!');
        reset();
        setPhone('');
      } else {
        alert('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black w-full max-w-2xl mx-auto bg-white rounded-2xl p-4 sm:p-6 space-y-4 shadow-md"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Let’s Connect! Fill the Form Below.
      </h2>

      {/* Name */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-3">
        <FaUser className="text-gray-500 mr-3" />
        <input
          type="text"
          {...register('name')}
          placeholder="Full Name"
          className="bg-transparent w-full outline-none"
          required
        />
      </div>

      {/* Phone & Email */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 w-full">
          <FaPhone className="text-gray-500 mr-3" />
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            inputStyle={{
              border: 'none',
              background: 'transparent',
              width: '100%',
              fontSize: '1rem',
            }}
            containerStyle={{ width: '100%' }}
            buttonStyle={{ border: 'none', background: 'transparent' }}
            dropdownStyle={{ zIndex: 9999 }}
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 w-full">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input
            type="email"
            {...register('email')}
            placeholder="Email Address"
            className="bg-transparent w-full outline-none"
            required
          />
        </div>
      </div>

      {/* Company */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-3">
        <FaBuilding className="text-gray-500 mr-3" />
        <input
          type="text"
          {...register('company')}
          placeholder="Company Name"
          className="bg-transparent w-full outline-none"
        />
      </div>

      {/* Message */}
      <div className="flex items-start border border-gray-300 rounded-2xl px-4 py-3">
        <FaCommentDots className="text-gray-500 mt-1 mr-3" />
        <textarea
          {...register('message')}
          placeholder="Your Message..."
          rows="3"
          className="bg-transparent w-full outline-none resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-black to-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 hover:opacity-90"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'SUBMIT'}
      </button>
    </form>
  );
};

export default ContactForm;
