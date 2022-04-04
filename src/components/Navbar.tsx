const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-main_font_color">
      <h2 className="font-bold sm:text-xl md:text-2xl">
        Chon<span className="text-red-600">.</span>Jinho
      </h2>
      <div className="flex space-x-5 items-center text-lg">
        <a href="#about" className="cursor-pointer">
          <span>About</span>
        </a>
        <a href="#projects" className="cursor-pointer">
          <span>Projects</span>
        </a>
        <a href="#contact" className="cursor-pointer">
          <button className="bg-main_accent py-2 px-4 rounded-full">
            Contact
          </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
