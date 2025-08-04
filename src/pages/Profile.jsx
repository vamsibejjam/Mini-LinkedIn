import { getAuth } from "firebase/auth";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { FaTrash } from "react-icons/fa";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), where("authorId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });
    return () => unsubscribe();
  }, [user.uid]);

  const handleDelete = async (postId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?",
    );
    if (confirm) {
      await deleteDoc(doc(db, "posts", postId));
    }
  };

  return (
    <div className="w-full px-4 py-6 md:px-6 lg:px-8 max-w-3xl mx-auto">
      <ProfileCard user={user} />
      <h2 className="text-lg font-semibold mt-8 mb-4 text-center md:text-left">
        My Posts
      </h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg shadow p-4"
          >
            <PostCard post={post} />
            <button
              onClick={() => handleDelete(post.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
              title="Delete Post"
              aria-label="Delete post"
            >
              <FaTrash size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
