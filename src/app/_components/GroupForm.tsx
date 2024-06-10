import React, { useState, FormEvent } from 'react';
import { Group } from '../_types/group';

interface GroupFormProps {
    onCreateGroup: (newGroup: Group) => void;
}

export default function GroupForm({ onCreateGroup }: GroupFormProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Function to handle Creating Group
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Create a new group object using the form data
        const newGroup: Group = {
            id: Date.now().toString(), // Generate a unique ID using Date.now()
            name,
            description,
            createdAt: new Date().toISOString(), // Set the creation date to current date/time
            posts: [],
        };
        // Call the onCreateGroup function passed from the parent component
        onCreateGroup(newGroup);
        // Clear the form fields
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
            <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">Group Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-white font-bold mb-2">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Group</button>
        </form>
    );
}
