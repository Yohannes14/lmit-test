import React, { useState } from 'react';
import Select from 'react-select';

const CreateOSSCModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        region: null,
        description: '',
        zone: null,
        woreda: null,
        houseNumber: '',
        phoneNumber: ''
    });

    const handleChange = (name) => (value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
                <h2 className="text-xl font-semibold mb-4">Add OSSC</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">OSSC Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange('name')(e.target.value)}
                                className="border w-full p-4 text-grey-1 text-sm focus:outline-none focus:shadow-outline border-grey-1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Region *</label>
                            <Select
                                options={[{ value: 'region1', label: 'Region 1' }, { value: 'region2', label: 'Region 2' }]}
                                value={formData.region}
                                onChange={handleChange('region')}
                                placeholder="Select Region"
                                isClearable
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange('description')(e.target.value)}
                            className="w-full border-gray-300 rounded-md"
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Zone or Sub City *</label>
                            <Select
                                options={[{ value: 'zone1', label: 'Zone 1' }, { value: 'zone2', label: 'Zone 2' }]}
                                value={formData.zone}
                                onChange={handleChange('zone')}
                                placeholder="Select Zone/Sub City"
                                isClearable
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Woreda or District *</label>
                            <Select
                                options={[{ value: 'woreda1', label: 'Woreda 1' }, { value: 'woreda2', label: 'Woreda 2' }]}
                                value={formData.woreda}
                                onChange={handleChange('woreda')}
                                placeholder="Select Woreda/District"
                                isClearable
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">House Number *</label>
                            <input
                                type="text"
                                value={formData.houseNumber}
                                onChange={(e) => handleChange('houseNumber')(e.target.value)}
                                className="border w-full p-4 text-grey-1 text-sm focus:outline-none focus:shadow-outline border-grey-1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Phone Number *</label>
                            <input
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={(e) => handleChange('phoneNumber')(e.target.value)}
                                className="border w-full p-4 text-grey-1 text-sm focus:outline-none focus:shadow-outline border-grey-1"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateOSSCModal;
