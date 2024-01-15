import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";

const UserProfile = () => {
  const user = useSelector((state) => state.user.userData);

  // Animation for the UserProfile component
  const profileAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={profileAnimation} className="container mx-auto mt-8">
      <div className="mt-16 max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        {user.fullName ? (
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">
              Full Name
            </label>
            <p className="text-gray-800">{user.fullName}</p>
          </div>
        ) : null}

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Username</label>
          <p className="text-gray-800">{user.userName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <p className="text-gray-800">{user.email}</p>
        </div>

        {/* <div className="mb-8">
          <label className="block text-gray-600 font-semibold">
            Phone Number
          </label>
          <p className="text-gray-800">{user.phoneNumber}</p>
        </div> */}

        {/* <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={() => {
            console.log("Edit Profile clicked");
          }}
        >
          Edit Profile
        </button> */}
      </div>
    </animated.div>
  );
};

export default UserProfile;
