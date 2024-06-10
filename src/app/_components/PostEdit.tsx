import React, { useState } from 'react';
import { Post } from '../_types/group';

interface PostEditProps {
    post: Post;
    onUpdatePost: (updatedPost: Post) => void;
}

export default function PostEdit({ post, onUpdatePost }: PostEditProps) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    // Function to handle updating the post
    const handleSubmit = () => {
        const updatedPost: Post = {
            ...post,
            title,
            content,
        };
        onUpdatePost(updatedPost); // Call the onUpdatePost function passed from the parent component
    };

    return (
        <div className="max-w-md mx-auto mt-6">
            <div className="mb-4">
                <label htmlFor="title" className="block text-white font-bold mb-2">Title:</label>
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
                <label htmlFor="content" className="block text-white font-bold mb-2">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Post</button>
        </div>
    );
}
