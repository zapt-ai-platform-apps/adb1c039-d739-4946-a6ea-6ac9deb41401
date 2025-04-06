import React, { useState, useEffect } from 'react';
import MessageInput from './components/MessageInput';
import FormatSettings from './components/FormatSettings';
import ForwardingHelper from './components/ForwardingHelper';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    const [smsFormat, setSmsFormat] = useState(() => {
        return localStorage.getItem('smsFormat') || '';
    });

    const [targetNumber, setTargetNumber] = useState(() => {
        return localStorage.getItem('targetNumber') || '';
    });

    const [message, setMessage] = useState('');
    const [isFormatMatched, setIsFormatMatched] = useState(false);

    useEffect(() => {
        // Save settings to localStorage
        localStorage.setItem('smsFormat', smsFormat);
        localStorage.setItem('targetNumber', targetNumber);
    }, [smsFormat, targetNumber]);

    useEffect(() => {
        // Validate if message matches the format
        if (smsFormat && message) {
            try {
                // First try as a regular expression
                const regex = new RegExp(smsFormat);
                setIsFormatMatched(regex.test(message));
            } catch (error) {
                console.error('Invalid regex pattern, falling back to simple string matching:', error);
                // If regex fails, fall back to simple string matching
                setIsFormatMatched(message.includes(smsFormat));
            }
        } else {
            setIsFormatMatched(false);
        }
    }, [message, smsFormat]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col text-gray-800">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Format Settings</h2>
                    <FormatSettings 
                        smsFormat={smsFormat} 
                        setSmsFormat={setSmsFormat} 
                        targetNumber={targetNumber} 
                        setTargetNumber={setTargetNumber} 
                    />
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Message Input</h2>
                    <MessageInput 
                        message={message} 
                        setMessage={setMessage} 
                        isFormatMatched={isFormatMatched}
                    />
                </div>

                {message && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Forwarding Assistant</h2>
                        <ForwardingHelper 
                            targetNumber={targetNumber} 
                            message={message} 
                            isFormatMatched={isFormatMatched}
                        />
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}