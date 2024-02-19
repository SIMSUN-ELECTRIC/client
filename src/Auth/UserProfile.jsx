import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import profilebg from "../assets/img/profilebg.jpg";

const UserProfile = () => {
  const user = useSelector((state) => state.user.userData);
  console.log("this is user", user);

  // Animation for the UserProfile component
  const profileAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={profileAnimation} className=" w-full">
      <div
        className="md:mt-20 bg-gray-100 min-h-screen w-full pt-28 md:pt-8"
        style={{ backgroundImage: `url(${profilebg})` }}
      >
        <div className="max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
          <div
            className="rounded-lg shadow-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              blur: "15px",
              boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
              font: "1em/1.168 Inter,sans-serif",
            }}
          >
            <div className="col-span-1 p-4">
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>
              {user.fullName ? (
                <div className="mb-6">
                  <label className="font-semibold">Full Name</label>
                  <p className="ml-2 text-black">{user.fullName}</p>
                </div>
              ) : null}
              <div className="mb-6">
                <label className="font-semibold">Username:</label>
                <p className="ml-2 text-black">{user.userName}</p>
              </div>
              <div className="mb-6">
                <label className="font-semibold text-black">Email:</label>
                <p className="ml-2 text-black">{user.email}</p>
              </div>

              {user.whatsappNumber ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">
                    Whatsapp Number:
                  </label>
                  <p className="ml-2 text-black">{user.whatsappNumber}</p>
                </div>
              ) : null}

              {user.field ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Field:</label>
                  <p className="ml-2 text-black">{user.field}</p>
                </div>
              ) : null}

              {user.experience ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">
                    Experience:
                  </label>
                  <p className="ml-2 text-black">{user.experience}</p>
                </div>
              ) : null}

              {user.location ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Location:</label>
                  <p className="ml-2 text-black">{user.location}</p>
                </div>
              ) : null}

              {user.pinCode ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">PinCode:</label>
                  <p className="ml-2 text-black">{user.pinCode}</p>
                </div>
              ) : null}

              {user.address ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Address:</label>
                  <p className="ml-2 text-black">{user.address}</p>
                </div>
              ) : null}
            </div>
            <div className="col-span-1 p-4">
              <h2 className="text-xl font-semibold mb-6">
                Company Information
              </h2>
              <div className="mb-6">
                <label className="font-semibold text-black">Company:</label>
                <p className="ml-2 text-black">Simsun</p>
              </div>
              <div className="mb-6">
                <label className="font-semibold text-black">
                  Company Email:
                </label>
                <p className="ml-2 text-black">simsunelectricwork@gmail.com</p>
              </div>
              {user.address ? (
                <div className="mb-4">
                  <label className="font-semibold text-black">Address:</label>
                  <p className="ml-2 text-black">{user.address}</p>
                </div>
              ) : null}

              {/* <div className="col-span-1">
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default UserProfile;
