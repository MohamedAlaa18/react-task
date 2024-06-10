import React, { useState, FormEvent } from 'react';
import { Post } from '../_types/group';

interface PostFormProps {
    groupId: string;
    onAddPost: (postId: string, post: Post) => void;
    onCancel: () => void;
}

export default function PostForm({ groupId, onAddPost, onCancel }: PostFormProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Function to handle adding a new post
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const postId = Date.now().toString();
        const createdAt = new Date().toISOString();
        const newPost: Post = { id: postId, title, content, createdAt };
        onAddPost(groupId, newPost);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Post</button>
            <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Cancel</button>
        </form>
    );
}
