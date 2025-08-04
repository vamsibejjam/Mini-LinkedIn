import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const PostForm = () => {
  const [content, setContent] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    await addDoc(collection(db, "posts"), {
      content,
      authorId: user.uid,
      authorName: user.displayName || user.email,
      timestamp: serverTimestamp(),
    });

    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 w-full max-w-2xl mx-auto bg-gray-100 p-4 rounded-xl shadow-md"
    >
      <textarea
        className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        rows="3"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 mt-3 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
