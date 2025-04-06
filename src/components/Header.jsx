import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">SMS Forwarding Assistant</h1>
                <p className="text-sm">Forward specific format messages to another number</p>
            </div>
        </header>
    );
};

export default Header;