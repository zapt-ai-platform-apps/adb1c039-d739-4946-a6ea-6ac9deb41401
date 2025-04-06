import React, { useState } from 'react';

const FormatGuide = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-4">
            <button
                type="button"
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Hide Format Guide' : 'Show Format Guide'}
            </button>

            {isOpen && (
                <div className="mt-2 text-sm bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-medium mb-2">Format Pattern Examples:</h4>
                    <ul className="space-y-2">
                        <li>
                            <code className="bg-gray-200 px-1 rounded">^OTP: \d{6}$</code>
                            <p className="text-gray-600 mt-1">Matches messages that start with "OTP: " followed by exactly 6 digits</p>
                        </li>
                        <li>
                            <code className="bg-gray-200 px-1 rounded">ALERT:.*URGENT</code>
                            <p className="text-gray-600 mt-1">Matches messages containing "ALERT:" and later "URGENT"</p>
                        </li>
                        <li>
                            <code className="bg-gray-200 px-1 rounded">Your verification code is \d+</code>
                            <p className="text-gray-600 mt-1">Matches "Your verification code is " followed by one or more digits</p>
                        </li>
                        <li>
                            <code className="bg-gray-200 px-1 rounded">SimpleText</code>
                            <p className="text-gray-600 mt-1">Matches any message containing "SimpleText"</p>
                        </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                        <strong>Tip:</strong> If you're not familiar with regular expressions, just enter the specific text you want to match.
                    </p>
                </div>
            )}
        </div>
    );
};

export default FormatGuide;