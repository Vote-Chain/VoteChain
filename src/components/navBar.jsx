// import React from 'react'


// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto flex justify-end items-center">
//         <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Home</button>
//         {/* You can add navigation links or other navigation items here */}
//         <div className="w-4"></div>
//         <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Voting</button>
//         {/* You can add navigation links or other navigation items here */}
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
import React from 'react'

const [nav, setNav] = useState(false);

const links = [
  {
    id: 1,
    link: "home",
  },
 
  {
    id: 2,
    link: "vote",
  },
];
const navBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default navBar
