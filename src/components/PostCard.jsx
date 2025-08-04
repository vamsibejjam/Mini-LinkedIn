const PostCard = ({ post }) => {
  const date = post?.timestamp?.seconds
    ? new Date(post.timestamp.seconds * 1000).toLocaleString()
    : "Loading...";

  return (
    <div className="bg-white p-4 md:p-6 shadow-md rounded-xl mb-4 w-full max-w-2xl mx-auto">
      <div className="font-semibold text-blue-700 text-base md:text-lg">
        {post.authorName}
      </div>
      <p className="text-gray-800 mt-2 text-sm md:text-base">{post.content}</p>
      <div className="text-xs text-gray-500 mt-3">{date}</div>
    </div>
  );
};

export default PostCard;
