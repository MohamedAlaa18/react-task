import React, { useState } from 'react';
import { Group } from '../_types/group';

interface GroupEditProps {
  group: Group;
  onUpdateGroup: (updatedGroup: Group) => void;
}

export default function GroupEdit({ group, onUpdateGroup }: GroupEditProps) {
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);

  // Function to handle updating group information
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Create an updated group object with the new data
    const updatedGroup: Group = {
      ...group, // Copy existing group properties
      name,
      description,
    };
    // Call the onUpdateGroup function passed from the parent component
    onUpdateGroup(updatedGroup);
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

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Group</button>
    </form>
  );
}
