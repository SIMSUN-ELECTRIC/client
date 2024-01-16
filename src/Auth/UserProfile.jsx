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
      <div className="mt-16 bg-gray-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              {user.fullName ? (
                <div className="mb-4">
                  <label className="font-semibold">Full Name</label>
                  <p className="ml-2 text-black">{user.fullName}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label className="font-semibold">Username:</label>
                <p className="ml-2 text-black">{user.userName}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-black">Email:</label>
                <p className="ml-2 text-black">{user.email}</p>
              </div>
              {/* <div className="mb-4">
                <label className="font-semibold text-black">Address:</label>
                <p className="ml-2 text-black">
                  Flat No. T-1, 104, 1st Floor, Tower-1, GH 01/A, Sector 16C,
                  Exotica Dreamville, Greater Noida, U.P. 201203
                </p>
              </div> */}
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Company Information
              </h2>
              <div className="mb-4">
                <label className="font-semibold text-black">Company:</label>
                <p className="ml-2 text-black">Simsun</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-black">
                  Company Email:
                </label>
                <p className="ml-2 text-black">simsunelectricwork@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default UserProfile;
