import React from 'react';
import logo from '../assets/lws.svg';

const Navbar = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        class="h-10"
                        src={logo}
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;