// import React, { useEffect, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   // Step 1: Create state to hold the window width
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSmall, setIsSmall] = useState(false);

//   // Step 2: Update window size on resize using useEffect
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 712); // Check if screen width is <= 768px (Mobile)
//       setIsSmall(window.innerWidth <= 412);
//     };

//     // Listen to window resize events
//     window.addEventListener("resize", handleResize);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);


//   // Step 3: Define your styles
//   const styles = {
//     list: {
//       display: isMobile ? 'none' : '',
//     },
//     icon: {
//         display: isMobile ? 'flex' : 'hidden',
//     },
//     main: {
//         padding: isSmall ? '1vw 5vw' : ''
//     },
//     logo: {
//         fontSize: isSmall ? '24px' : ''
//     },
//     icon: {
//         fontSize: isSmall ? '24px' : ''
//     }
//   };

//   return (
//     <>
//       <div style={styles.main} className="w-screen flex justify-between items-center px-16 py-4 bg-slate-300 fixed">
//         <div style={styles.logo} className="text-4xl font-bold">
//           <span className="text-orange-700">You</span>{" "}
//           <span className="text-white">&</span>{" "}
//           <span className="text-blue-700">Me</span>
//         </div>
//         <div className="list-none flex gap-8" style={styles.list}>
//           <li className="hover:cursor-pointer hover:scale-110">Home</li>
//           <li className="hover:cursor-pointer hover:scale-110">ButterCup</li>
//           <li className="hover:cursor-pointer hover:scale-110">Hotstuff</li>
//           <li className="hover:cursor-pointer hover:scale-110">Coming</li>
//         </div>
//         <GiHamburgerMenu style={styles.icon} className="text-3xl"  />
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to check mobile screen
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const [isSmall, setIsSmall] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 712); // Check if screen width is <= 712px
      setIsSmall(window.innerWidth <= 412);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenuToggle = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div
        className="w-screen flex justify-between items-center px-16 py-4 bg-slate-300 fixed z-10"
        style={{ padding: isSmall ? "1vw 8vw" : "" }}
      >
        <div className="text-4xl font-bold"  style={{ fontSize: isSmall ? "24px" : "" }}>
          <span className="text-orange-700">You</span>{" "}
          <span className="text-white">&</span>{" "}
          <span className="text-blue-700">Me</span>
        </div>

        {/* Navbar list - Only shown when screen is greater than 712px */}
        {!isMobile && (
          <div className="list-none flex gap-8">
            <li className="hover:cursor-pointer hover:scale-110  hover:text-red-700 hover:font-bold">Home</li>
            <li className="hover:cursor-pointer hover:scale-110  hover:text-red-700 hover:font-bold">ButterCup</li>
            <li className="hover:cursor-pointer hover:scale-110  hover:text-red-700 hover:font-bold">Hotstuff</li>
            <li className="hover:cursor-pointer hover:scale-110  hover:text-red-700 hover:font-bold">Coming</li>
          </div>
        )}

        {/* Hamburger menu visible only on mobile */}
        {isMobile && (
          <GiHamburgerMenu
            className="text-3xl" 
            style={{ fontSize: isSmall ? "24px" : "" }}
            onClick={handleMenuToggle} // Toggle menu when clicked
          />
        )}
      </div>

      {/* Sliding menu - conditionally rendered */}
      <div
        className={`fixed top-0 right-0 h-full bg-slate-300 w-1/2 transition-transform duration-300 ease-in-out z-20 ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <IoClose onClick={closeMenuToggle} className="mx-5 mt-5 text-3xl hover:bg-red-700" />
        {/* Menu items - This will only be displayed when the menu is open */}
        <ul className="list-none flex flex-col items-center gap-4 pt-20">
          <li className="hover:cursor-pointer hover:scale-110 hover:text-red-700">Home</li>
          <li className="hover:cursor-pointer hover:scale-110 hover:text-red-700">ButterCup</li>
          <li className="hover:cursor-pointer hover:scale-110 hover:text-red-700">Hotstuff</li>
          <li className="hover:cursor-pointer hover:scale-110 hover:text-red-700">Coming</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

