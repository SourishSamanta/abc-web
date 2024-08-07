import React, { useState, useEffect } from "react";
import axios from "axios";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    content: "",
    media: ""
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/post/read-posts-all");
        console.log(import.meta.env.VITE_API_URL + "/post/read-posts-all");
        if (response.data.success) {
          const postsWithComments = response.data.posts.map(post => ({
            ...post,
            comments: post.comments || []
          }));
          setPosts(postsWithComments);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCommentChange = (postId, value) => {
    setComments({
      ...comments,
      [postId]: value,
    });
  };

  const handleCommentSubmit = (postId) => {
    console.log(`Comment on post ${postId}:`, comments[postId]);
    setComments({
      ...comments,
      [postId]: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("New Post:", newPost);
    setNewPost({
      content: "",
      media: ""
    });
    setIsFormOpen(false);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh] bg-gray-900 text-white">
      <div className="flex w-full flex-col items-center">
        <div className="w-full flex justify-between mb-6 px-4">
          <h1 className="text-2xl">Community Posts</h1>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            {isFormOpen ? "Cancel" : "Create New Post"}
          </button>
        </div>
        {isFormOpen && (
          <form onSubmit={handleFormSubmit} className="w-full max-w-2xl px-4 mb-6 bg-gray-800 p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Create a New Post</h2>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleFormChange}
              placeholder="Post content..."
              className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
              rows="4"
            />
            <input
              type="text"
              name="media"
              value={newPost.media}
              onChange={handleFormChange}
              placeholder="Media URL (optional)"
              className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Create
            </button>
          </form>
        )}
        <div className="flex flex-col w-full items-center gap-4 mb-4 px-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="post-card p-4 flex flex-col bg-gray-800 rounded-md shadow-md w-full max-w-2xl cursor-pointer"
            >
              <div className="mb-2 text-gray-400 text-sm">
                <span className="font-bold">{post.user.username}</span> • <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="mb-2">{post.content}</p>
              {post.media && (
                <img
                  src={post.media}
                  alt={`${post.user.username} post`}
                  className="w-full h-60 object-cover rounded-md mb-2"
                />
              )}
              <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
                <div className="flex items-center">
                  <button className="mr-2 hover:text-blue-400">Like</button>
                  <span>{post.likes || 0}</span>
                </div>
                <div className="flex items-center">
                  <button className="mr-2 hover:text-blue-400">Comment</button>
                  <span>{post.comments.length || 0}</span>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  value={comments[post._id] || ""}
                  onChange={(e) => handleCommentChange(post._id, e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                />
                <button
                  onClick={() => handleCommentSubmit(post._id)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
