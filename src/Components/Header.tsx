import { NavLink } from 'react-router-dom'

const Navigate = [
  { name: 'Home', href: '/' },
  { name: 'Phones', href: '/phone' },
  { name: 'WeatherApp', href: '/weather' },
  { name: 'Joke', href: '/joke' },
]

const Header = () => {

  const hoverEffect = ({ isActive }: { isActive: boolean }) => (
    `${isActive
      ? "text-white"
      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:underline"}`
  )

  return (
    <>
      <header className="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-violet-600 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center items-center p-4 ">
          {/* Logo */}



          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-lg">
            {Navigate?.map((item, idx) => (
              <NavLink key={`${item.name}-${idx}`} to={item.href} className={hoverEffect}>
                <div className="transition-all duration-300">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header
