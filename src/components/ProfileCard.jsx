const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow p-6 rounded-lg text-center w-full max-w-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2">
        {user.displayName || "No Name"}
      </h2>
      <p className="text-gray-600 break-words text-sm md:text-base">
        {user.email}
      </p>
      <div className="mt-4 bg-blue-50 text-blue-800 px-4 py-2 rounded-md font-medium inline-block text-sm md:text-base">
        {user.bio ||
          "About me: Passionate about learning, growing, and connecting with others."}
      </div>
    </div>
  );
};

export default ProfileCard;
