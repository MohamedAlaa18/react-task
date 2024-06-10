import React, { useState } from 'react';
import { Group, Post } from '../_types/group';
import PostList from './PostList';
import PostForm from './PostForm';

interface GroupListProps {
    groups: Group[];
    onEditGroup: (group: Group) => void;
    onDeleteGroup: (id: string) => void;
    onCreatePost: (groupId: string, newPost: Post) => void;
    onUpdatePost: (groupId: string, updatedPost: Post) => void;
    onDeletePost: (groupId: string, postId: string) => void;
}

export default function GroupList({ groups, onEditGroup, onDeleteGroup, onCreatePost, onUpdatePost, onDeletePost }: GroupListProps) {
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

    // Function to handle add post
    const handleAddPost = (groupId: string) => {
        setSelectedGroupId(groupId);
    };

    // Function to handle deselecting a group
    const handleDeselectGroup = () => {
        setSelectedGroupId(null);
    };

    return (
        <div className="max-w-lg mx-auto py-12">
            {groups.map((group) => (
                <div key={group.id} className="bg-white shadow-md rounded px-8 py-6 mb-4">
                    <h3 className="text-gray-800 text-xl font-bold mb-2">{group.name}</h3>
                    <p className="text-gray-600 mb-2">{group.description}</p>
                    <p className="text-sm text-gray-400">Created on: {new Date(group.createdAt).toLocaleString()}</p>

                    <div className="mt-4">
                        <button onClick={() => onEditGroup(group)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                        <button onClick={() => onDeleteGroup(group.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
                    </div>

                    {/* Conditional rendering of PostForm component if the group is Add Post clicked*/}
                    {selectedGroupId === group.id ? (
                        <div className="mt-4">
                            <PostForm groupId={group.id} onAddPost={onCreatePost} onCancel={handleDeselectGroup} />
                        </div>
                    ) : (
                        // Button to select the group and add a post
                        <button onClick={() => handleAddPost(group.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">Add Post</button>
                    )}

                    {/* Render the PostList component for the group */}
                    <PostList groupId={group.id} posts={group.posts} onUpdatePost={onUpdatePost} onDeletePost={onDeletePost} />
                </div>
            ))}
        </div>
    );
}
