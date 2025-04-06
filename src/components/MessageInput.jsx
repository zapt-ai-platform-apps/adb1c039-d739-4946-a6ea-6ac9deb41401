import React from 'react';
import ExampleMessage from './ExampleMessage';

const MessageInput = ({ message, setMessage, isFormatMatched }) => {
    return (
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Paste or Type SMS Message
            </label>
            <div className="mt-1">
                <textarea
                    id="message"
                    rows="4"
                    className={`box-border shadow-sm block w-full sm:text-sm rounded-md p-2 border ${
                        message ? (isFormatMatched ? 'border-green-500' : 'border-red-500') : 'border-gray-300'
                    }`}
                    placeholder="Paste the SMS message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            {message && (
                <div className={`mt-2 text-sm ${isFormatMatched ? 'text-green-600' : 'text-red-600'}`}>
                    {isFormatMatched 
                        ? '✓ This message matches your format pattern and can be forwarded.' 
                        : '✗ This message does not match your format pattern.'}
                </div>
            )}
            
            <ExampleMessage setMessage={setMessage} />
        </div>
    );
};

export default MessageInput;