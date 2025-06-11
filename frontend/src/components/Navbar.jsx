import React, { useState, useEffect } from 'react'; // Import useEffect
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHome, FaUserTie, FaCar, FaPhone } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const navItems = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'About Us', href: '/aboutus', icon: FaUserTie },
  { name: 'Cars', href: '/cars', icon: FaCar },
  { name: 'Contact Us', href: '/contact', icon: FaPhone },
];

export default function Navbar() {
  const location = useLocation(); // Get current location object from React Router
  const [active, setActive] = useState(''); // Initialize with an empty string

  // Use useEffect to update the active state based on the current URL path
  useEffect(() => {
    // Find the nav item that matches the current pathname
    const currentPath = location.pathname;
    const foundItem = navItems.find(item => item.href === currentPath);
    if (foundItem) {
      setActive(foundItem.name);
    } else if (currentPath === '/') { // Handle the root path explicitly
      setActive('Home');
    }
  }, [location.pathname]); // Re-run this effect when the pathname changes

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                {/* It's good practice to wrap your logo in a Link to home */}
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Nav */}
              <div className="hidden sm:flex sm:space-x-10">
                {navItems.map((item) => (
                  // Use Link component instead of a tag
                  <Link
                    key={item.name}
                    to={item.href} // Use 'to' prop for Link
                    // No need for onClick here, useEffect handles active state
                    className={`flex flex-col items-center text-sm font-medium ${
                      active === item.name
                        ? 'text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-500'
                    }`}
                  >
                    <item.icon className="mb-1 h-6 w-6" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="grid grid-cols-2 gap-4 px-4 py-4">
              {navItems.map((item) => (
                // Use Link component instead of a tag
                <Link
                  key={item.name}
                  to={item.href} // Use 'to' prop for Link
                  // No need for onClick here, useEffect handles active state
                  className={`flex flex-col items-center text-sm font-medium ${
                    active === item.name
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-500'
                  }`}
                >
                  <item.icon className="mb-1 h-6 w-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}