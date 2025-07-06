'use client';

import { useState, useRef, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


const renderMessageWithLinks = (text) => {
  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => {
    if (line.trim() === '') {
      return <div key={lineIndex} className="h-3"></div>;
    }
    
    const urlRegex = /(https?:\/\/[^\s<>\"]+[^\s<>\",.;:!?)\]\'`])/g;
    const parts = line.split(urlRegex);
    
    return (
      <div key={lineIndex} className="mb-1 last:mb-0">
        {parts.map((part, partIndex) => {
          if (part.match(urlRegex)) {
            return (
              <a 
                key={partIndex} 
                href={part} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      </div>
    );
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAnimatingSend, setIsAnimatingSend] = useState(false);
  const messagesEndRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  
  const [userName, setUserName] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [serviceOptions, setServiceOptions] = useState([
    { id: 'service-ai', label: 'Service now AI', checked: false },
    { id: 'oracle-ai', label: 'Oracle AI', checked: false },
    { id: 'cybersecurity', label: 'Cyber Security', checked: false },
    { id: 'grc', label: 'GRC Solutions', checked: false },
  ]);
  const [selectedService, setSelectedService] = useState('');
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formStage, setFormStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [showSupportPrompt, setShowSupportPrompt] = useState(false);
  const [supportPromptShown, setSupportPromptShown] = useState(false);
  const [isClearingHistory, setIsClearingHistory] = useState(false);
  
  const [isSupportMode, setIsSupportMode] = useState(false);
  const [supportMessages, setSupportMessages] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('chatUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setUserEmail(user.email);
      fetchChatHistory(user.email);
    } else {
      // Initialize with welcome message when no user is logged in
      setMessages([
        { text: "Welcome to Appit", sender: 'bot' },
        { text: "Please enter your email to get started", sender: 'bot' },
      ]);
      setAwaitingEmail(true);
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn && !supportPromptShown) {
      setTimeout(() => {
        setShowSupportPrompt(true);
      }, 1000);
    }
  }, [isLoggedIn]);

  const fetchChatHistory = async (email) => {
    try {
      setIsTyping(true);
      const response = await fetch(`${API_BASE_URL}/api/user/history?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const history = data.flatMap(msg => [
            { text: msg.question, sender: 'user' },
            { text: msg.answer, sender: 'bot' }
          ]);
          
          setMessages([
            { text: "Welcome back to Appit", sender: 'bot' },
            ...history
          ]);
        } else {
          setMessages([
            { text: "Welcome to Appit", sender: 'bot' },
            { text: "How can I help you today?", sender: 'bot' },
          ]);
        }
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
      setMessages([
        { text: "Welcome to Appit", sender: 'bot' },
        { text: "How can I help you today?", sender: 'bot' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleEmailSubmit = async (email) => {
    if (!email.trim() || !email.includes('@')) {
      setMessages(prev => [...prev, { 
        text: "Please enter a valid email address", 
        sender: 'bot' 
      }]);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/user/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        const userData = { email: email };
        localStorage.setItem('chatUser', JSON.stringify(userData));
        
        setIsLoggedIn(true);
        setUserEmail(email);
        setAwaitingEmail(false);
        
        fetchChatHistory(email);
      } else {
        const errorData = await response.json();
        setMessages(prev => [...prev, { 
          text: errorData.detail || 'Failed to register email. Please try again.', 
          sender: 'bot' 
        }]);
      }
    } catch (error) {
      console.error('Email registration error:', error);
      setMessages(prev => [...prev, { 
        text: 'Network error. Please try again.', 
        sender: 'bot' 
      }]);
    }
  };

  const handleSupportClick = () => {
    setShowSupportPrompt(true);
    setSupportPromptShown(true);
  };
  
  const handleSupportSubmit = async (submitQuery) => {
    if (submitQuery) {
      setIsSupportMode(true);
      setSupportMessages([
        { text: "You are now in support mode. Please describe your issue or question.", sender: 'bot' },
        { text: "Type 'back to chat' at any time to return to regular chat mode.", sender: 'bot' }
      ]);
      setShowSupportPrompt(false);
      setSupportPromptShown(true);
    } else {
      setMessages(prev => [...prev, { 
        text: "Alright, if you change your mind, you can select 'support' anytime.", 
        sender: 'bot' 
      }]);
      setShowSupportPrompt(false);
      setSupportPromptShown(true);
    }
  };

  const handleSupportMessage = async (message) => {
    if (message.toLowerCase().includes('back to chat') || message.toLowerCase().includes('exit support')) {
      setIsSupportMode(false);
      setSupportMessages([]);
      setMessages(prev => [...prev, { 
        text: "You've returned to regular chat mode. How can I help you today?", 
        sender: 'bot' 
      }]);
      return;
    }

    setIsTyping(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/support/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: userEmail,
          message: message
        })
      });

      if (response.ok) {
        setSupportMessages(prev => [...prev, { 
          text: "Your support query has been submitted! Our team will contact you shortly.", 
          sender: 'bot' 
        }, {
          text: "You can continue asking support questions or type 'back to chat' to return to regular chat mode.",
          sender: 'bot'
        }]);
      } else {
        setSupportMessages(prev => [...prev, { 
          text: "Failed to submit your query. Please try again later.", 
          sender: 'bot' 
        }]);
      }
    } catch (error) {
      setSupportMessages(prev => [...prev, { 
        text: "Network error. Please try again later.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleSupportMode = () => {
    if (isSupportMode) {
      setIsSupportMode(false);
      setSupportMessages([]);
      setMessages(prev => [...prev, { 
        text: "You've returned to regular chat mode. How can I help you today?", 
        sender: 'bot' 
      }]);
    } else {
      setIsSupportMode(true);
      setSupportMessages([
        { text: "You are now in support mode. Please describe your issue or question.", sender: 'bot' },
        { text: "Type 'back to chat' at any time to return to regular chat mode.", sender: 'bot' }
      ]);
    }
  };

  const handleClearHistory = async () => {
    setIsClearingHistory(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/user/history?email=${encodeURIComponent(userEmail)}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        if (isSupportMode) {
          setSupportMessages([
            { text: "Your support history has been cleared.", sender: 'bot' },
            { text: "Please describe your issue or question.", sender: 'bot' }
          ]);
        } else {
          setMessages([
            { text: "Your chat history has been cleared.", sender: 'bot' },
            { text: "How can I help you today?", sender: 'bot' }
          ]);
        }
      } else {
        const errorData = await response.json();
        const errorMessage = `Failed to clear history: ${errorData.detail || 'Unknown error'}`;
        if (isSupportMode) {
          setSupportMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
        } else {
          setMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
        }
      }
    } catch (error) {
      const errorMessage = "Network error. Please try again later.";
      if (isSupportMode) {
        setSupportMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
      } else {
        setMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
      }
    } finally {
      setIsClearingHistory(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('chatUser');
    setIsLoggedIn(false);
    setUserEmail('');
    setMessages([
      { text: "Welcome to Appit", sender: 'bot' },
      { text: "Please enter your email to get started", sender: 'bot' },
    ]);
    setAwaitingEmail(true);
    setSupportMessages([]);
    setIsSupportMode(false);
    setShowSupportPrompt(false);
    setSupportPromptShown(false);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    
    if (isOpen) {
      setShowServiceSelection(false);
      setShowContactForm(false);
      setFormStage(0);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, supportMessages]);

  const generateResponse = async (userMessage) => {
    console.log("generateResponse called with message:", userMessage);
    console.log("User email being used:", userEmail);

    try {
      const requestBody = {
        email: userEmail,
        message: userMessage
      };

      console.log("Sending request to:", `${API_BASE_URL}/api/chat/`);
      console.log("Request body:", requestBody);

      const response = await fetch(`${API_BASE_URL}/api/chat/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API responded with error status:", response.status);
        console.error("Error response text:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response JSON:", data);

      const finalResponse = data.response || "I'm sorry, I couldn't process your request right now. Please try again.";
      console.log("Final response to return:", finalResponse);

      return finalResponse;

    } catch (error) {
      console.error('Error calling chat API:', error);
      return "I'm experiencing some technical difficulties. Please try again in a moment.";
    }
  };

  const handleServiceSelect = (id) => {
    const updatedOptions = serviceOptions.map(option => ({
      ...option,
      checked: option.id === id
    }));
    
    setServiceOptions(updatedOptions);
    const selected = serviceOptions.find(option => option.id === id);
    setSelectedService(selected ? selected.label : '');
  };
  
  const handleFormSubmit = () => {
    setIsAnimatingSend(true);
    setTimeout(() => setIsAnimatingSend(false), 500);
    
    if (formStage === 0) {
      if (selectedService) {
        setFormStage(1);
        setMessages(prev => [...prev, { text: selectedService, sender: 'user' }]);
      }
    } else if (formStage === 1) {
      if (userName.trim()) {
        setFormStage(2);
        setMessages(prev => [...prev, { text: userName, sender: 'user' }]);
      }
    } else if (formStage === 2) {
      if (userMobile.trim()) {
        setFormStage(3);
        setMessages(prev => [...prev, { text: userMobile, sender: 'user' }]);
      }
    } else if (formStage === 3) {
      if (userEmail.trim()) {
        setFormStage(4);
        setMessages(prev => [...prev, { text: userEmail, sender: 'user' }]);
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, { 
            text: "Our Service team will contact you", 
            sender: 'bot' 
          }]);
        }, 1500);
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    setIsAnimatingSend(true);
    const userMessage = inputValue;
    setInputValue('');
    
    // If awaiting email, handle email submission
    if (awaitingEmail) {
      setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      setTimeout(() => setIsAnimatingSend(false), 500);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        handleEmailSubmit(userMessage);
      }, 1000);
      return;
    }
    
    if (isSupportMode) {
      setSupportMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      setIsTyping(true);
      setTimeout(() => setIsAnimatingSend(false), 500);
      
      setTimeout(() => {
        handleSupportMessage(userMessage);
      }, 1000);
    } else {
      setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      setIsTyping(true);
      setTimeout(() => setIsAnimatingSend(false), 500);
      
      const thinkingTime = Math.min(1000 + userMessage.length * 20, 3000);
      
      setTimeout(() => {
        generateResponse(userMessage)
          .then(response => {
            setIsTyping(false);
            setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
          })
          .catch(error => {
            console.error('Error getting response:', error);
            setIsTyping(false);
            setMessages(prev => [...prev, {
              text: "I'm having trouble connecting. Please try again.",
              sender: 'bot'
            }]);
          });
      }, thinkingTime);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  if (!isClient) return null;

  const currentMessages = isSupportMode ? supportMessages : messages;

return (
  <div className="fixed bottom-20 right-4 sm:right-8 md:right-12 z-50">
    {/* Chatbot toggle button */}
    <button 
      onClick={toggleChatbot}
      className={`p-2 sm:p-3 rounded-full bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all transform duration-300 ${isOpen ? 'rotate-0' : 'hover:rotate-12'} ring-2 ring-white`}
      aria-label="Toggle chat"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012 2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )}
    </button>
    
    {/* Chatbot container */}
    <div 
      className={`
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'} 
        transform transition-all duration-300 ease-in-out origin-bottom-right
        absolute bottom-[calc(100%+12px)] sm:bottom-[calc(100%+12px)] right-0 sm:right-0 md:right-0
        w-[calc(100vw-4rem)] sm:w-[453px] max-w-[90vw] sm:max-w-none h-auto sm:h-[540px] md:h-[540px] max-h-[70vh] sm:max-h-[540px]
        flex flex-col
        rounded-[24px] border-[1px] sm:border-2 border-[#0066B3] sm:border-[#4A00E0] bg-white
        shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-jost font-semibold text-[#4A00E0] text-sm md:text-base">
          {isLoggedIn ? 
            (isSupportMode ? `Support Mode - ${userEmail}` : `Chatting as ${userEmail}`) : 
            "Chat with us"
          }
        </h3>
        <div className="flex items-center">
          {isLoggedIn && (
            <>
              <button 
                onClick={toggleSupportMode}
                className="mr-2 text-xs text-gray-500 hover:text-gray-700"
              >
                {isSupportMode ? 'Back to Chat' : 'Support'}
              </button>
              
              <button 
                onClick={handleClearHistory}
                disabled={isClearingHistory}
                className="mr-2 text-xs text-gray-500 hover:text-gray-700 disabled:opacity-50"
              >
                {isClearingHistory ? 'Clearing...' : 'Clear History'}
              </button>
              <button 
                onClick={handleLogout}
                className="mr-2 text-xs text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </>
          )}
          <button 
            onClick={toggleChatbot}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {currentMessages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {/* MESSAGE BUBBLE */}
              <div 
                className={`max-w-[80%] inline-block px-[16px] py-[12px] rounded-[24px] ${
                  message.sender === 'user' ? 'bg-[#FFE0E1]' : 'bg-[#DFF0FF]'
                }`}
              >
                <div className="font-jost text-[14px] font-normal leading-[120%] text-black">
                  {renderMessageWithLinks(message.text)}
                </div>
              </div>
            </div>
          ))}

          {!isSupportMode && showSupportPrompt && isLoggedIn && (
            <div className="flex justify-start">
              <div className="max-w-[80%] inline-block px-[16px] py-[12px] rounded-[24px] bg-[#DFF0FF]">
                <div className="font-jost text-[14px] font-normal leading-[120%] text-black mb-2">
                  Would you like to submit a support query?
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleSupportSubmit(true)}
                    className="px-3 py-1 bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] text-white rounded-md"
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => handleSupportSubmit(false)}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="inline-flex justify-center items-center gap-[2px] bg-[#DFF0FF] px-[16px] py-[12px] rounded-[24px]">
                <div className="flex gap-[5px] items-end h-[12px]">
                  <div className="w-[6px] h-[6px] bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '0.8s' }}></div>
                  <div className="w-[6px] h-[6px] bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] rounded-full animate-bounce" style={{ animationDelay: '200ms', animationDuration: '0.8s' }}></div>
                  <div className="w-[6px] h-[6px] bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] rounded-full animate-bounce" style={{ animationDelay: '400ms', animationDuration: '0.8s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input container - Always show input for email or chat */}
      <div className="p-4 sm:p-6 border-t border-gray-200">
        {isMobile && showServiceSelection ? (
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-jost font-medium text-left">Select a Service</div>
            {serviceOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-2" onClick={() => handleServiceSelect(option.id)}>
                <div className={`w-4 h-4 rounded-full border ${option.checked ? 'border-[#0066B3] bg-[#0066B3]' : 'border-gray-300'}`}>
                  {option.checked && (
                    <div className="w-2 h-2 mx-auto mt-[3px] bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-[14px] font-jost">{option.label}</span>
              </div>
            ))}
            <button
              onClick={handleFormSubmit}
              className="mt-2 self-end w-9 h-9 rounded-full bg-[#0066B3] flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 text-white ${isAnimatingSend ? 'animate-send-message' : ''}`}
                fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
          </div>
        ) : isMobile && showContactForm ? (
          <div className="flex flex-col gap-3">
            {formStage === 1 && (
              <>
                <div className="text-[14px] font-jost font-medium text-left">Enter your name</div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md font-jost text-[14px]"
                />
              </>
            )}
            {formStage === 2 && (
              <>
                <div className="text-[14px] font-jost font-medium text-left">Enter your Mobile no</div>
                <input
                  type="tel"
                  value={userMobile}
                  onChange={(e) => setUserMobile(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md font-jost text-[14px]"
                />
              </>
            )}
            {formStage === 3 && (
              <>
                <div className="text-[14px] font-jost font-medium text-left">Enter your mail id</div>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md font-jost text-[14px]"
                />
              </>
            )}
            {formStage < 4 && (
              <button
                onClick={handleFormSubmit}
                className="mt-2 self-end w-9 h-9 rounded-full bg-[#0066B3] flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-white ${isAnimatingSend ? 'animate-send-message' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        ) : (
          <div className="inline-flex items-center gap-[8px] sm:gap-[10px] w-full justify-center">
            <div className={`flex ${isMobile ? 'w-[85%]' : 'w-[336px]'} h-[48px] ${isMobile ? 'px-[10px]' : 'px-[24px]'} py-[10px] items-center justify-center gap-[10px] rounded-[16px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]`}>
              <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={
                  awaitingEmail 
                    ? "Please enter your email address" 
                    : isMobile 
                      ? "Enter your text here" 
                      : "Ask anything..."
                }
                className={`w-full font-jost text-[14px] font-normal md:font-semibold leading-[120%] text-[#252525] placeholder-[#6D6D6D] focus:outline-none ${isMobile ? 'text-center focus:text-left' : ''}`}
              />
            </div>
            <button 
              onClick={handleSendMessage}
              className={`${isMobile ? 'w-[40px] h-[40px]' : 'w-[48px] h-[48px]'} flex items-center justify-center ${isMobile ? 'bg-[#0066B3]' : 'bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0]'} rounded-full ${isMobile ? 'shadow-[4px_2px_4px_rgba(0,0,0,0.25)] border border-white' : 'shadow-md hover:shadow-lg transition-shadow'}`}
            >
              {isMobile ? (
                <svg xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-white ${isAnimatingSend ? 'animate-send-message' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-white ${isAnimatingSend ? 'animate-send-message' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Chatbot;