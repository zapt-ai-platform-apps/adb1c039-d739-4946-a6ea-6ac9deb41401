import React from 'react';

const ForwardingHelper = ({ targetNumber, message, isFormatMatched }) => {
    const handleForward = () => {
        // Try to open the SMS app with pre-filled message
        const smsUri = `sms:${targetNumber}?body=${encodeURIComponent(message)}`;
        window.open(smsUri);
    };

    if (!targetNumber) {
        return (
            <div className="text-amber-600 bg-amber-50 p-4 rounded-md">
                <p>Please set a target phone number in the Format Settings section.</p>
            </div>
        );
    }

    if (!isFormatMatched) {
        return (
            <div className="text-red-600 bg-red-50 p-4 rounded-md">
                <p>This message doesn't match the specified format and won't be forwarded.</p>
                <p className="mt-2 text-sm">If you believe this is an error, check your format pattern in the settings.</p>
            </div>
        );
    }

    return (
        <div className="text-green-600 bg-green-50 p-4 rounded-md">
            <p className="mb-4">This message matches your specified format and is ready to be forwarded to {targetNumber}.</p>
            
            <button 
                onClick={handleForward}
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
            >
                Forward Message
            </button>
            
            <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Manual forwarding instructions:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Copy the message from the input box above</li>
                    <li>Open your phone's messaging app</li>
                    <li>Create a new message to {targetNumber}</li>
                    <li>Paste the message and send</li>
                </ol>
            </div>
        </div>
    );
};

export default ForwardingHelper;