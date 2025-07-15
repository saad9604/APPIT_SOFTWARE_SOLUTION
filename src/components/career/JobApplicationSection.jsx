"use client";

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaRegClock, FaUserTie, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa'; // Import icons

const JobApplicationSection = ({ jobData }) => {
    console.log('jobdata...', jobData);

    // Animation states for job description scroll
    const textContainerRef = useRef(null);
    const sectionRef = useRef(null); // Used for overall section visibility
    const [isHoveringText, setIsHoveringText] = useState(false);

    // Form states (existing)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // File state (existing)
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const [fileBase64, setFileBase64] = useState("");
    const [fileSize, setFileSize] = useState("");

    // NEW STATES FOR SCREENING QUESTIONS
    const [screeningAnswers, setScreeningAnswers] = useState({}); // Stores answers for dynamic screening questions
    const [customQuestionAnswer, setCustomQuestionAnswer] = useState(""); // Stores answer for the custom question

    // NEW STATE FOR DESCRIPTION EXPANSION
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    // Validation state (existing, now includes screening errors)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Refs (existing)
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    // Set initial text position for job description
    useEffect(() => {
        if (textContainerRef.current) {
            textContainerRef.current.scrollTop = 0;
        }
        // Reset description expansion when jobData changes
        setIsDescriptionExpanded(false);
    }, [jobData]);

    // Scroll handler for job description
    useEffect(() => {
        const handleMouseEnter = () => setIsHoveringText(true);
        const handleMouseLeave = () => setIsHoveringText(false);

        const handleWheel = (event) => {
            if (window.innerWidth >= 1024 && isHoveringText && textContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current;
                const isAtTop = scrollTop === 0;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight;

                if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
                    // Allow propagation to scroll the window if at the ends of the scrollable area
                } else {
                    event.preventDefault();
                    textContainerRef.current.scrollTop += event.deltaY;
                }
            }
        };

        const textContainer = textContainerRef.current;
        if (textContainer) {
            textContainer.addEventListener('mouseenter', handleMouseEnter);
            textContainer.addEventListener('mouseleave', handleMouseLeave);
            textContainer.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (textContainer) {
                textContainer.removeEventListener('mouseenter', handleMouseEnter);
                textContainer.removeEventListener('mouseleave', handleMouseLeave);
                textContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, [isHoveringText]);

    // Handle input changes for main form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    // Handle answer change for screening questions
    const handleScreeningAnswerChange = (index, value) => {
        setScreeningAnswers((prev) => ({
            ...prev,
            [index]: value,
        }));
        if (errors[`screening_${index}`]) {
            setErrors((prev) => ({
                ...prev,
                [`screening_${index}`]: "",
            }));
        }
    };

    // Handle custom question answer change
    const handleCustomQuestionChange = (e) => {
        setCustomQuestionAnswer(e.target.value);
        if (errors.custom_question) {
            setErrors((prev) => ({
                ...prev,
                custom_question: "",
            }));
        }
    };

    // Convert file to Base64 (still useful for display filename/size)
    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Format file size
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Handle file upload
    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            setFile(null);
            setFileName("No file chosen");
            setFileBase64("");
            setFileSize("");
            setErrors(prev => ({ ...prev, file: "Resume is required." }));
            return;
        }

        const acceptedFileTypes = [
            'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp',
            'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/rtf', 'text/plain', 'application/vnd.oasis.opendocument.text'
        ];
        const maxSizeBytes = 10 * 1024 * 1024; // 10MB max

        if (!acceptedFileTypes.includes(selectedFile.type)) {
            setErrors(prev => ({ ...prev, file: "Please upload a valid resume file (image, PDF, Word, or text document)." }));
            setFile(null);
            setFileName("No file chosen");
            setFileBase64("");
            setFileSize("");
            return;
        }

        if (selectedFile.size > maxSizeBytes) {
            setErrors(prev => ({ ...prev, file: `File size exceeds ${formatFileSize(maxSizeBytes)} limit. Please upload a smaller file.` }));
            setFile(null);
            setFileName("No file chosen");
            setFileBase64("");
            setFileSize("");
            return;
        }

        setFile(selectedFile);
        setFileName(selectedFile.name);
        setFileSize(formatFileSize(selectedFile.size));

        try {
            const base64 = await convertFileToBase64(selectedFile);
            setFileBase64(base64);
            setErrors(prev => ({ ...prev, file: "" }));
        } catch (error) {
            console.error("Error converting file to base64:", error);
            setErrors(prev => ({ ...prev, file: "Error processing file. Please try again." }));
        }
    };

    // Handle file upload button click
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    // UPDATED: Validate form including screening questions
    const validateForm = () => {
        const newErrors = {};

        // Main form fields validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        } else if (formData.name.trim().length > 100) {
            newErrors.name = "Name cannot exceed 100 characters";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9\s()\-]{8,20}$/.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!file) {
            newErrors.file = "Resume is required";
        }

        // Screening questions validation
        if (Array.isArray(jobData?.screening_categories)) {
            jobData.screening_categories.forEach((catStr, idx) => {
                // Ensure catStr is a valid JSON string before parsing
                let questionData;
                try {
                    questionData = JSON.parse(catStr);
                } catch (e) {
                    console.error("Validation Error: Could not parse screening category JSON:", e);
                    // Decide how to handle invalid JSON. For now, we'll skip validation for it.
                    return;
                }
                const { question, category } = questionData; // Destructure after successful parse

                const errorKey = `screening_${idx}`; // Unique key for errors

                // Check for empty answers
                if (!screeningAnswers[idx] || String(screeningAnswers[idx]).trim() === "") {
                    newErrors[errorKey] = "This question is required";
                }
            });
        }

        // Custom question validation
        if (jobData?.custom_question && jobData.custom_question.trim() !== "" && customQuestionAnswer.trim() === "") {
            newErrors.custom_question = "This question is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Close message
    const closeMessage = () => {
        setSubmitSuccess(false);
        setSubmitError("");
    };

    // UPDATED: Handle form submission with AJAX (now includes TWO API calls)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitSuccess(false);
            setSubmitError("");

            let collectedScreeningAnswers = {}; // Define it here so it's accessible for the second API call

            try {
                const submitFormData = new FormData();
                submitFormData.append('name', formData.name);
                submitFormData.append('email', formData.email);
                submitFormData.append('phone', formData.phone);
                if (file) {
                    submitFormData.append('attachment', file);
                }

                // Prepare screening answers for the second API call
                if (Array.isArray(jobData?.screening_categories)) {
                    jobData.screening_categories.forEach((catStr, idx) => {
                        try {
                            const { question } = JSON.parse(catStr);
                            collectedScreeningAnswers[question] = screeningAnswers[idx];
                        } catch (parseError) {
                            console.error("Error parsing screening category for submission (preparation):", parseError);
                        }
                    });
                }
                if (jobData?.custom_question && jobData.custom_question.trim() !== "") {
                    collectedScreeningAnswers[jobData.custom_question] = customQuestionAnswer.trim();
                }

                // Note: We are NO LONGER appending 'screeningAnswers' to the first FormData
                // submitFormData.append('screeningAnswers', JSON.stringify(collectedScreeningAnswers)); // <-- REMOVED THIS LINE

                console.log('formData for first submission (without screening answers):', submitFormData);
                const apiUrl = `https://appit-backend-wb0d.onrender.com/apply-job/${jobData?.id}`;

                // --- FIRST API CALL: Submit Main Application Data ---
                const response = await axios.post(apiUrl, submitFormData, {
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                const result = response.data; // This 'result' should contain result.application.id

                if (result && result.success && result.application && result.application.id) {
                    console.log("First API call success. Application ID:", result.application.id);

                    // --- SECOND API CALL: Submit Screening Answers ---
                    try {
                        console.log("inside second try....", result.application.id);
                        const screeningResponse = await axios.post(
                            `https://appit-backend-wb0d.onrender.com/applications/${result.application.id}`,
                            { screening_answers: collectedScreeningAnswers }, // must be an object with 'screening_answers' key
                            {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json' // Important for JSON body
                                }
                            }
                        );

                        if (screeningResponse?.data?.success) {
                            console.log("Screening questions added successfully to application ID:", result.application.id);
                            setSubmitSuccess(true); // Only set success after BOTH calls are successful

                            // Clear form fields
                            setFormData({
                                name: "",
                                phone: "",
                                email: "",
                            });
                            setFile(null);
                            setFileName("No file chosen");
                            setFileBase64("");
                            setFileSize("");
                            setScreeningAnswers({}); // Clear screening answers
                            setCustomQuestionAnswer(""); // Clear custom answer

                            if (formRef.current) {
                                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            setTimeout(() => {
                                setSubmitSuccess(false);
                            }, 10000);
                        } else {
                            // If second call fails but first succeeded, still report an error
                            console.error("Second API call (screening answers) failed:", screeningResponse?.data?.message || "Unknown error");
                            setSubmitError('Application submitted, but failed to save screening answers. Please contact support.');
                            setTimeout(() => {
                                setSubmitError("");
                            }, 10000);
                        }
                    } catch (screeningError) {
                        console.error("Error saving screening answers (second API call):", screeningError);
                        setSubmitError('Application submitted, but failed to save screening answers due to network error. Please contact support.');
                        setTimeout(() => {
                            setSubmitError("");
                        }, 10000);
                    }

                } else {
                    // First API call failed or didn't return expected ID
                    setSubmitError('Failed to submit your application. Please try again later.');
                    setTimeout(() => {
                        setSubmitError("");
                    }, 10000);
                }
            } catch (error) {
                console.error("Form submission error (first API call):", error);
                setSubmitError('Failed to submit your application. Please check your network and try again.');
                setTimeout(() => {
                    setSubmitError("");
                }, 10000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Scroll to the first error field
            const firstErrorFieldName = Object.keys(errors)[0];
            const errorElement = formRef.current?.querySelector(`[name="${firstErrorFieldName}"]`) ||
                                 formRef.current?.querySelector(`[name^="screening_"][id*="${firstErrorFieldName}"]`) || // Updated for screening question inputs
                                 formRef.current?.querySelector(`[name="custom_question"]`); // Fallback for custom question
            if (errorElement) {
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                errorElement.focus();
            }
        }
    };

    const formatPostedDate = (isoDate) => {
        if (!isoDate) return 'Date not available';
        const date = new Date(isoDate);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return 'Posted: Today';
        } else if (diffDays === 1) {
            return 'Posted: 1 day ago';
        } else if (diffDays < 30) {
            return `Posted: ${diffDays} days ago`;
        } else {
            return `Posted on ${date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`;
        }
    };

    // Utility function to truncate description
    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(/\s+/); // Split by one or more whitespace characters
        if (words.length <= wordLimit) {
            return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const displayDescription = jobData?.description
        ? (isDescriptionExpanded ? jobData.description : truncateText(jobData.description, 50))
        : 'No description available for this job.';

    const shouldShowReadMore = jobData?.description && jobData.description.split(/\s+/).length > 50;


    return (
        <section
            ref={sectionRef}
            className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 font-['Jost'] relative z-10"
        >
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 xl:gap-20">

                {/* Left side - Job details card and description */}
                <div
                    ref={textContainerRef}
                    className="w-full lg:w-1/2 flex flex-col items-start gap-8 lg:pr-8 h-[600px] md:h-[700px] lg:h-[800px] overflow-y-auto scrollbar-hide relative z-20 pt-4"
                    style={{
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none' // IE/Edge
                    }}
                >
                    {/* Job details card */}
                    <div className="w-full p-6 sm:p-8 flex flex-col items-start gap-6 bg-white rounded-xl shadow-lg border border-gray-200">
                        <div className="w-full flex flex-row justify-between items-start gap-6">
                            <div className="flex flex-col items-start gap-2.5 flex-grow">
                                <h3 className="text-2xl font-bold leading-tight text-gray-900">{jobData?.job_title || 'Job Title Not Available'}</h3>
                                <p className="text-lg font-semibold text-gray-700">{jobData?.company || 'Company Name'}</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066B3] to-[#004A80] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-2xl font-bold text-white">U</span> {/* Placeholder for company logo/initial */}
                            </div>
                        </div>

                        <div className="w-full flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 text-base text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaRegClock className="text-gray-500 text-lg" />
                                <span className="font-medium">{jobData?.experience || '0'} years experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-gray-500 text-lg" />
                                <span className="font-medium">{jobData?.job_type || 'Full-time'} - {jobData?.job_location || 'Remote'}</span>
                            </div>
                            <span className="font-normal text-gray-500">{formatPostedDate(jobData?.created_at)}</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-6 md:gap-8 pt-4">
                        <h3 className="text-2xl font-semibold leading-tight text-gray-900 flex items-center gap-3">
                            <FaUserTie className="text-[#0066B3]" /> Job Description
                        </h3>
                        {/* Modified description rendering */}
                        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
                            {displayDescription}
                        </p>
                        {shouldShowReadMore && (
                            <button
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                className="text-[#0066B3] hover:text-[#004A80] font-medium text-sm self-start mt-2"
                            >
                                {isDescriptionExpanded ? 'Read less' : 'Read more'}
                            </button>
                        )}


                        <div className="flex flex-col items-start gap-4 md:gap-6 mt-6 w-full">
                            <h3 className="text-2xl font-semibold leading-tight text-gray-900 flex items-center gap-3">
                                <FaCheckCircle className="text-[#0066B3]" /> Key Skills Required
                            </h3>
                            <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 md:gap-3 w-full">
                                {(jobData?.selected_skills && jobData?.selected_skills.length > 0 ? jobData?.selected_skills : ['No skills listed']).map((skill, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 border border-gray-300 shadow-sm transition-colors duration-200 hover:bg-gray-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Apply Form (now includes screening questions) */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 lg:sticky lg:top-8 self-start">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply for this Job</h2>

                    {submitSuccess && (
                        <div className="relative bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 w-full animate-fadeIn" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline ml-2">Your application has been submitted successfully.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={closeMessage}>
                                <FaTimes className="text-green-700 hover:text-green-900" />
                            </span>
                        </div>
                    )}

                    {submitError && (
                        <div className="relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full animate-fadeIn" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline ml-2">{submitError}</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={closeMessage}>
                                <FaTimes className="text-red-700 hover:text-red-900" />
                            </span>
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#0066B3] focus:border-[#0066B3] sm:text-base`}
                                placeholder="John Doe"
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby={errors.name ? "name-error" : null}
                            />
                            {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#0066B3] focus:border-[#0066B3] sm:text-base`}
                                placeholder="you@example.com"
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={errors.email ? "email-error" : null}
                            />
                            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#0066B3] focus:border-[#0066B3] sm:text-base`}
                                placeholder="+91 9876543210"
                                aria-invalid={errors.phone ? "true" : "false"}
                                aria-describedby={errors.phone ? "phone-error" : null}
                            />
                            {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Your Resume</label>
                            <div className="mt-1 flex items-center space-x-3">
                                <button
                                    type="button"
                                    onClick={handleUploadClick}
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066B3]"
                                >
                                    <FaUserTie className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                                    Browse
                                </button>
                                <span className="text-sm text-gray-500 truncate max-w-[calc(100%-120px)]">{fileName} {fileSize ? `(${fileSize})` : ''}</span>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.rtf,.txt,image/*"
                                    aria-invalid={errors.file ? "true" : "false"}
                                    aria-describedby={errors.file ? "file-error" : null}
                                />
                            </div>
                            {errors.file && <p id="file-error" className="mt-1 text-sm text-red-600">{errors.file}</p>}
                        </div>

                        {/* --- Screening Questions Section --- */}
                        {(Array.isArray(jobData?.screening_categories) && jobData.screening_categories.length > 0) && (
                            <>
                                <h3 className="text-lg font-semibold text-gray-900 mt-6 pt-4 border-t border-gray-200">Screening Questions</h3>
                                {jobData.screening_categories.map((catStr, idx) => {
                                    let questionData;
                                    try {
                                        questionData = JSON.parse(catStr);
                                    } catch (e) {
                                        console.error("Error parsing screening category JSON:", e);
                                        return null; // Skip if parsing fails
                                    }
                                    const { question, category } = questionData; // Destructure after successful parse

                                    const errorKey = `screening_${idx}`; // Unique key for errors
                                    const radioName = `screening_radio_${idx}`; // Unique name for radio group

                                    return (
                                        <div key={idx}>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <span className="font-semibold mr-1">{idx + 1}.</span>
                                                {question}
                                            </label>

                                            {/* Assuming 'Custom Question' is a text input, others are yes/no */}
                                            {category === "Custom Question" ? (
                                                <input
                                                    type="text"
                                                    id={`screening_text_${idx}`}
                                                    name={errorKey} // Use errorKey for name to link validation
                                                    value={screeningAnswers[idx] || ""}
                                                    onChange={(e) => handleScreeningAnswerChange(idx, e.target.value)}
                                                    className={`mt-1 block w-full p-3 border ${errors[errorKey] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#0066B3] focus:border-[#0066B3] sm:text-base`}
                                                    placeholder="Enter your answer"
                                                    aria-invalid={errors[errorKey] ? "true" : "false"}
                                                    aria-describedby={errors[errorKey] ? `${errorKey}-error` : null}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-6 mt-1">
                                                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name={radioName}
                                                            value="yes"
                                                            checked={screeningAnswers[idx] === "yes"}
                                                            onChange={() => handleScreeningAnswerChange(idx, "yes")}
                                                            className="accent-[#0066B3] h-4 w-4"
                                                            aria-invalid={errors[errorKey] ? "true" : "false"}
                                                            aria-describedby={errors[errorKey] ? `${errorKey}-error` : null}
                                                        />
                                                        Yes
                                                    </label>
                                                    <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name={radioName}
                                                            value="no"
                                                            checked={screeningAnswers[idx] === "no"}
                                                            onChange={() => handleScreeningAnswerChange(idx, "no")}
                                                            className="accent-[#0066B3] h-4 w-4"
                                                            aria-invalid={errors[errorKey] ? "true" : "false"}
                                                            aria-describedby={errors[errorKey] ? `${errorKey}-error` : null}
                                                        />
                                                        No
                                                    </label>
                                                </div>
                                            )}
                                            {errors[errorKey] && <p id={`${errorKey}-error`} className="mt-1 text-sm text-red-600">{errors[errorKey]}</p>}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        {/* --- Custom Question Field --- */}
                        {jobData?.custom_question && jobData.custom_question.trim() !== "" && (
                            <div className={(Array.isArray(jobData?.screening_categories) && jobData.screening_categories.length > 0) ? 'mt-6 pt-4 border-t border-gray-200' : ''}>
                                <label htmlFor="custom_question_input" className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="font-semibold mr-1">
                                        {(Array.isArray(jobData?.screening_categories) ? jobData.screening_categories.length + 1 : 1)}.
                                    </span>
                                    {jobData.custom_question}
                                </label>
                                <textarea
                                    id="custom_question_input"
                                    name="custom_question" // Use a distinct name for validation and focus
                                    rows="3"
                                    value={customQuestionAnswer}
                                    onChange={handleCustomQuestionChange}
                                    className={`mt-1 block w-full p-3 border ${errors.custom_question ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#0066B3] focus:border-[#0066B3] sm:text-base resize-y`}
                                    placeholder="Enter your answer"
                                    aria-invalid={errors.custom_question ? "true" : "false"}
                                    aria-describedby={errors.custom_question ? "custom-question-error" : null}
                                ></textarea>
                                {errors.custom_question && <p id="custom-question-error" className="mt-1 text-sm text-red-600">{errors.custom_question}</p>}
                            </div>
                        )}
                        {/* --- End Screening Questions Section --- */}

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0066B3] hover:bg-[#004A80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066B3] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Custom scrollbar styles and animations */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default JobApplicationSection;