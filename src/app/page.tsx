"use client";
import React, { useState } from 'react';
import { Group, Post } from "./_types/group";
import GroupForm from "./_components/GroupForm";
import GroupList from "./_components/GroupList";
import GroupEdit from "./_components/GroupEdit";

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editGroup, setEditGroup] = useState<Group | null>(null);

  // Function to handle create group
  const handleCreateGroup = (newGroup: Group) => {
    setGroups([...groups, newGroup]); // Add the new group to the list of groups
    setEditMode(false); // Exit edit mode after creation
  };

  // Function to handle delete group
  const handleDeleteGroup = (id: string) => {
    setGroups(groups.filter(group => group.id !== id)); // Remove the group with the specified ID
  };

  // Function to handle entering edit mode
  const handleEnterEditMode = (group: Group) => {
    setEditGroup(group); // Set the group being edited
    setEditMode(true); // Enter edit mode
  };

  // Function to handle exiting edit mode
  const handleExitEditMode = () => {
    setEditGroup(null); // Clear the group being edited
    setEditMode(false); // Exit edit mode
  };

  // Function to handle update group
  const handleUpdateGroup = (updatedGroup: Group) => {
    setGroups(groups.map(group => (group.id === updatedGroup.id ? updatedGroup : group))); // Update the group with the same ID
    handleExitEditMode(); // Exit edit mode after update
  };

  // Function to handle create post
  const handleCreatePost = (groupId: string, newPost: Post) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          posts: [...group.posts, newPost]
        };
      }
      return group;
    }));
  };

  // Function to handle post update
  const handleUpdatePost = (groupId: string, updatedPost: Post) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          posts: group.posts.map(post => (post.id === updatedPost.id ? updatedPost : post))
        };
      }
      return group;
    }));
  };

  // Function to handle post delete
  const handleDeletePost = (groupId: string, postId: string) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          posts: group.posts.filter(post => post.id !== postId)
        };
      }
      return group;
    }));
  };

  return (
    <div className="h-full w-full min-h-[100dvh] bg-slate-700">
      <h1 className="text-center font-semibold text-[40px] text-under">Group Management App</h1>

      {editMode ? ( // edit mode
        <GroupEdit group={editGroup!} onUpdateGroup={handleUpdateGroup} />
      ) : (
        <GroupForm onCreateGroup={handleCreateGroup} />
      )}

      <GroupList
        groups={groups}
        onEditGroup={handleEnterEditMode}
        onDeleteGroup={handleDeleteGroup}
        onCreatePost={handleCreatePost}
        onUpdatePost={handleUpdatePost}
        onDeletePost={handleDeletePost}
      />
    </div>
  );
}
