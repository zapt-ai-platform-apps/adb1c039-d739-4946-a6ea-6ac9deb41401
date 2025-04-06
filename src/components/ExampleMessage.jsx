import React from 'react';

const ExampleMessage = ({ setMessage }) => {
    const examples = [
        "OTP: 123456 for your account verification.",
        "ALERT: Your package has been delivered. URGENT: Signature required.",
        "Your verification code is 987654. Do not share this with anyone.",
        "Weather alert: Heavy rain expected in your area tomorrow."
    ];
    
    return (
        <div className="mt-2">
            <p className="text-sm text-gray-600 mb-1">Example messages to try:</p>
            <div className="flex flex-wrap gap-2">
                {examples.map((example, index) => (
                    <button
                        key={index}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded cursor-pointer"
                        onClick={() => setMessage(example)}
                    >
                        Try Example {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExampleMessage;