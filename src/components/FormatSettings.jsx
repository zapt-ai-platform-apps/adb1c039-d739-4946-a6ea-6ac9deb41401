import React from 'react';
import FormatGuide from './FormatGuide';

const FormatSettings = ({ smsFormat, setSmsFormat, targetNumber, setTargetNumber }) => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="smsFormat" className="block text-sm font-medium text-gray-700 mb-1">
                    SMS Format Pattern
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        id="smsFormat"
                        className="box-border shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., ^OTP: \d{6}$"
                        value={smsFormat}
                        onChange={(e) => setSmsFormat(e.target.value)}
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    Enter a pattern to match specific SMS formats. You can use regular expressions or simple text.
                </p>
                <FormatGuide />
            </div>

            <div>
                <label htmlFor="targetNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Forward to Number
                </label>
                <div className="mt-1">
                    <input
                        type="tel"
                        id="targetNumber"
                        className="box-border shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., +1234567890"
                        value={targetNumber}
                        onChange={(e) => setTargetNumber(e.target.value)}
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    Enter the phone number you want to forward messages to.
                </p>
            </div>
        </div>
    );
};

export default FormatSettings;