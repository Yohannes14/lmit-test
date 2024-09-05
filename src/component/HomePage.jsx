import React, { useState } from 'react';
import Table from './Table';
import CreateOSSCModal from './modal/CreateOSSCModal'; // Ensure this path is correct

const HomePage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="flex h-screen bg-gradient-to-b from-[#0575E6] via-[#02298A] to-[#021B79] p-4">
            {/* Sidebar */}
            <div className="w-1/4 max-w-[136px] rounded-lg shadow-lg p-4 flex flex-col items-center">
                <nav className="w-full">
                    <ul className="space-y-4">
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
                        <li><a href="#" className="text-blue-500 hover:text-blue-700">Profile</a></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-4 m-8 bg-bg-1 bg-opacity-20 rounded-[40px] shadow-lg px-[85px] py-[45px]">
                <div className='flex justify-end items-end space-x-6'>
                    <h1 className='text-white'>Profile</h1>
                    <h1 className='text-white'>Logout</h1>
                </div>
                <div className='flex justify-between items-center p-4'>
                    <div>
                        <h1 className="text-[40px] text-white font-semibold mb-5">OSSC Center Lists</h1>
                        <div className="relative w-80 mb-4">
                            <input
                                type="text"
                                className="w-full pl-10 py-2 border-[1.5px] text-[12px] rounded-md border-gray-300 focus:border-blue-500"
                                placeholder="Search OSSC by Name"
                            />
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <button onClick={handleOpenModal}
                        className="flex items-center bg-white text-blue-500 py-2 px-4 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <i className="fas fa-plus mr-2"></i>
                        <span className="text-sm font-semibold">Create OSCC</span>
                    </button>
                </div>
                <Table />
            </div>
            <CreateOSSCModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default HomePage;
