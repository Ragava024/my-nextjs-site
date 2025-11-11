const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Engineering</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
