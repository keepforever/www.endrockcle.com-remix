import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { RiCloseCircleFill, RiMenu2Fill } from "react-icons/ri";

const navigation = [
  { name: "Song List", href: "/song-list" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
  { name: "Shows", href: "/shows" },
];

type Props = Record<string, never>;

export const Navbar: React.FC<Props> = () => {
  const [shouldBeOpaque, setShouldBeOpaque] = useState<boolean>();
  const [, setScrollY] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPos = event.target.scrollingElement.scrollTop;
    setScrollY(scrollPos);
    if (scrollPos >= 75) setShouldBeOpaque(true);
    if (scrollPos < 75) setShouldBeOpaque(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={clsx("sticky top-0 transition-colors duration-500 z-10", {
        "backdrop-filter backdrop-blur-lg bg-opacity-40 bg-black":
          shouldBeOpaque,
        "bg-black": !shouldBeOpaque,
      })}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      className="w-24 cursor-pointer"
                      src="/logo-navbar.png"
                      alt="band logo"
                    />
                  </Link>
                </div>

                {/* Desktop Links */}

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          clsx(
                            isActive && "bg-gray-900 text-white",
                            !isActive &&
                              "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}

                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseCircleFill
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <RiMenu2Fill className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    clsx(
                      isActive && "bg-gray-900 text-white",
                      !isActive &&
                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
