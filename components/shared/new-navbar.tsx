// components/Navbar.js
import Link from "next/link";

export default function NewNavbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white">
            <Link href="/about">About</Link>
          </li>
          {/* Dropdown on hover */}
          <li className="relative group">
            <Link href="#" className="text-white">
              Academies
            </Link>
            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/academies/academy1">Academy 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/academies/academy2">Academy 2</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/academies/academy3">Academy 3</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="text-white">
            <Link href="/admissions">Admissions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
