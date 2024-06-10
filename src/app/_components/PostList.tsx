import React from 'react';
import { Post } from '../_types/group';

interface PostListProps {
    posts: Post[];
    groupId: string;
    onUpdatePost: (groupId: string, updatedPost: Post) => void;
    onDeletePost: (groupId: string, postId: string) => void;
}

export default function PostList({ posts, groupId, onUpdatePost, onDeletePost }: PostListProps) {
    return (
        <div className="max-w-lg mx-auto mt-6">
            {posts.map(post => (
                <div key={post.id} className="bg-white shadow-md rounded px-8 py-6 mb-4">
                    <h3 className="text-gray-800 text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-2">{post.content}</p>
                    <p className="text-sm text-gray-400">Created on: {new Date(post.createdAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}
