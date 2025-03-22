function UserProfile() {
  return (
    <div className="transition-shadow duration-300 hover:shadow-xl user-profile bg-gray-100 p-4 sm:p-8 max-w-sx sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="hover:scale-110 transition-transform duration-300 ease-in-out w-24 h-24 sm:w-36 sm:h-36 rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xg sm:text-xl font-bold my-4 hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
