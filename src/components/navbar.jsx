import Vector from "../assets/Vector.png";
import Dropdown from "./dropdown";
import pendle from "../assets/pendle.png";

import DropdownNew from "./dropDownNew";
import DropdownConnect from "./dropDownConnect";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#F0F6FF] border-2 border-b-slate-400">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16">
          <div className="flex flex-row md:items-center">
            <div className="flex-shrink-0">
              <img src={Vector} alt="navbar_logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Dropdown title="Pendle" img={pendle} />
                <a
                  href="#"
                  className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Stake
                </a>

                <a
                  href="#"
                  className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Claim
                </a>

                <a
                  href="#"
                  className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Lock
                </a>
                <div className="relative">
                  <button
                    onClick={toggleNavbar}
                    type="button"
                    className="text-[#0B366B] hover:text-[#137CE7]  px-3 py-2 rounded-md text-sm font-extrabold focus:outline-none  "
                  >
                    More
                    <svg
                      className="ml-1 h-5 w-5 text-[#0B366B] hover:text-[#137CE7] inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                      <div className="py-1 rounded-md bg-white shadow-xs">
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                          <img
                            src="image1.jpg"
                            alt="Image 1"
                            className="w-6 h-6 mr-2"
                          />
                          Option 1
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                          <img
                            src="image2.jpg"
                            alt="Image 2"
                            className="w-6 h-6 mr-2"
                          />
                          Option 2
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpenMenu ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Menu End */}
          <div className=" items-center hidden md:flex space-x-4">
            <DropdownNew />
            <DropdownConnect />

            <svg
              width="24"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto"
            >
              <path
                d="M12.2756 24C15.977 24 19.3575 22.316 21.5971 19.5566C21.9284 19.1484 21.5671 18.5521 21.0551 18.6496C15.2331 19.7584 9.88656 15.2945 9.88656 9.41738C9.88656 6.03197 11.6988 2.91886 14.6443 1.24266C15.0983 0.984281 14.9841 0.295922 14.4682 0.200625C13.745 0.0672624 13.0111 0.000109516 12.2756 0C5.65178 0 0.275635 5.3677 0.275635 12C0.275635 18.6239 5.64334 24 12.2756 24Z"
                fill="#1E2036"
              />
            </svg>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className="md:hidden" id="mobile-menu">
          <div className="md:hidden block">
            <div className=" flex flex-col w-44 ">
              <a
                href="#"
                className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
              >
                Stake
              </a>

              <a
                href="#"
                className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
              >
                Claim
              </a>

              <a
                href="#"
                className="text-[#0B366B] hover:text-[#137CE7] px-3 py-2 rounded-md text-sm font-extrabold"
              >
                Lock
              </a>
              <div className="relative">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="text-[#0B366B] hover:text-[#137CE7]  px-3 py-2 rounded-md text-sm font-extrabold focus:outline-none  "
                >
                  More
                  <svg
                    className="ml-1 h-5 w-5 text-[#0B366B] hover:text-[#137CE7] inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >
                        <img
                          src="image1.jpg"
                          alt="Image 1"
                          className="w-6 h-6 mr-2"
                        />
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >
                        <img
                          src="image2.jpg"
                          alt="Image 2"
                          className="w-6 h-6 mr-2"
                        />
                        Option 2
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="  flex flex-col  md:hidden space-y-8 m-4">
            <div className="w-44 z-10">
              <Dropdown title="Pendle" img={pendle} />
            </div>

            <div className=" flex space-x-2">
              <DropdownNew />
              <DropdownConnect />
            </div>
            {/* 3 Icons */}
            <div className="  flex md:hidden items-center text-center ">
              <div className=" rounded-full hover:cursor-pointer w-12 h-12 flex items-center justify-evenly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="21" fill="#B5D0FF" />
                  <path
                    d="M31.5329 17.1117C31.5482 17.3249 31.5482 17.5381 31.5482 17.7513C31.5482 24.2538 26.599 31.7462 17.5533 31.7462C14.7665 31.7462 12.1777 30.939 10 29.5382C10.396 29.5838 10.7766 29.599 11.1878 29.599C13.4873 29.599 15.604 28.8224 17.2944 27.4976C15.132 27.4518 13.3198 26.0356 12.6954 24.0863C13 24.1319 13.3045 24.1624 13.6244 24.1624C14.066 24.1624 14.5076 24.1016 14.9188 23.995C12.665 23.538 10.9746 21.5584 10.9746 19.1675V19.1066C11.6294 19.4721 12.3909 19.7006 13.1979 19.731C11.873 18.8477 11.005 17.3401 11.005 15.6345C11.005 14.7208 11.2487 13.8833 11.6751 13.1523C14.0964 16.1371 17.736 18.0863 21.8172 18.2995C21.7411 17.934 21.6954 17.5533 21.6954 17.1726C21.6954 14.4619 23.8883 12.2538 26.6141 12.2538C28.0304 12.2538 29.3096 12.8478 30.208 13.8071C31.3197 13.594 32.3856 13.1828 33.3299 12.6193C32.9644 13.7615 32.1878 14.7209 31.1674 15.33C32.1573 15.2234 33.1167 14.9493 33.9999 14.5686C33.3299 15.5432 32.4923 16.4111 31.5329 17.1117Z"
                    fill="#3D77DA"
                  />
                </svg>
              </div>
              <div className=" rounded-full hover:cursor-pointer w-12 h-12 flex items-center justify-evenly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="21" fill="#B5D0FF" />
                  <path
                    d="M30.4454 13.483C28.183 11.6648 24.6055 11.3568 24.4543 11.3438C24.2153 11.3232 23.9886 11.4586 23.8905 11.677C23.8868 11.6844 23.6871 12.264 23.4939 12.8231C26.1231 13.2832 27.9095 14.3043 28.0047 14.3603C28.4508 14.6198 28.6001 15.1919 28.3398 15.6371C28.1671 15.9339 27.8544 16.1 27.5333 16.1C27.3737 16.1 27.2132 16.0599 27.0658 15.974C27.0396 15.9582 24.4188 14.4667 21.0019 14.4667C17.584 14.4667 14.9623 15.9591 14.9362 15.974C14.491 16.2326 13.9197 16.0804 13.6612 15.6343C13.4027 15.19 13.5529 14.6198 13.9972 14.3603C14.0924 14.3043 15.8853 13.2795 18.522 12.8203C18.3186 12.2547 18.1132 11.6844 18.1095 11.677C18.0115 11.4576 17.7847 11.3195 17.5457 11.3438C17.3945 11.3559 13.8171 11.6639 11.5248 13.5072C10.3264 14.6142 7.93335 21.0859 7.93335 26.6812C7.93335 26.7802 7.95855 26.8763 8.00802 26.9622C9.66095 29.8648 14.1671 30.6246 15.1937 30.6572C15.2003 30.6582 15.2059 30.6582 15.2115 30.6582C15.3925 30.6582 15.5633 30.5714 15.6707 30.4248L16.7813 28.9203C14.3453 28.3332 13.0573 27.4102 12.9799 27.3532C12.5655 27.048 12.4759 26.4638 12.7811 26.0484C13.0853 25.635 13.6677 25.5435 14.0821 25.8468C14.1167 25.8692 16.4939 27.5334 21 27.5334C25.5239 27.5334 27.8946 25.8627 27.9179 25.8459C28.3323 25.5454 28.9165 25.6359 29.2199 26.0522C29.5223 26.4666 29.4345 27.0471 29.022 27.3514C28.9445 27.4083 27.6631 28.3295 25.2327 28.9166L26.3293 30.4239C26.4367 30.5714 26.6075 30.6572 26.7885 30.6572C26.7951 30.6572 26.8007 30.6572 26.8063 30.6563C27.8339 30.6236 32.34 29.8639 33.992 26.9612C34.0415 26.8754 34.0667 26.7792 34.0667 26.6803C34.0667 21.0859 31.6736 14.6142 30.4454 13.483ZM17.2667 24.7334C16.2353 24.7334 15.4 23.689 15.4 22.4C15.4 21.1111 16.2353 20.0667 17.2667 20.0667C18.298 20.0667 19.1333 21.1111 19.1333 22.4C19.1333 23.689 18.298 24.7334 17.2667 24.7334ZM24.7333 24.7334C23.702 24.7334 22.8667 23.689 22.8667 22.4C22.8667 21.1111 23.702 20.0667 24.7333 20.0667C25.7647 20.0667 26.6 21.1111 26.6 22.4C26.6 23.689 25.7647 24.7334 24.7333 24.7334Z"
                    fill="#3D77DA"
                  />
                </svg>
              </div>
              <div className=" rounded-full hover:cursor-pointer w-12 h-12 flex items-center justify-evenly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="21" fill="#B5D0FF" />
                  <g clip-path="url(#clip0_2071_19369)">
                    <path
                      d="M14.9333 13.5333C13.8915 13.5333 12.8599 13.7385 11.8974 14.1372C10.9349 14.5359 10.0603 15.1203 9.32362 15.8569C8.58694 16.5936 8.00258 17.4682 7.60389 18.4307C7.2052 19.3932 7 20.4248 7 21.4667C7 22.5085 7.2052 23.5401 7.60389 24.5026C8.00258 25.4651 8.58694 26.3397 9.32362 27.0764C10.0603 27.8131 10.9349 28.3974 11.8974 28.7961C12.8599 29.1948 13.8915 29.4 14.9333 29.4C15.9752 29.4 17.0068 29.1948 17.9693 28.7961C18.9318 28.3974 19.8064 27.8131 20.543 27.0764C21.2797 26.3397 21.8641 25.4651 22.2628 24.5026C22.6615 23.5401 22.8667 22.5085 22.8667 21.4667C22.8667 20.4248 22.6615 19.3932 22.2628 18.4307C21.8641 17.4682 21.2797 16.5936 20.543 15.8569C19.8064 15.1203 18.9318 14.5359 17.9693 14.1372C17.0068 13.7385 15.9752 13.5333 14.9333 13.5333ZM27.5333 14.4667C27.0431 14.4667 26.5576 14.6477 26.1046 14.9995C25.6517 15.3513 25.2401 15.8669 24.8935 16.5169C24.5468 17.1669 24.2718 17.9386 24.0842 18.7879C23.8966 19.6372 23.8 20.5474 23.8 21.4667C23.8 22.3859 23.8966 23.2962 24.0842 24.1454C24.2718 24.9947 24.5468 25.7664 24.8935 26.4164C25.2401 27.0664 25.6517 27.582 26.1046 27.9338C26.5576 28.2856 27.0431 28.4667 27.5333 28.4667C28.0236 28.4667 28.5091 28.2856 28.962 27.9338C29.415 27.582 29.8265 27.0664 30.1732 26.4164C30.5199 25.7664 30.7949 24.9947 30.9825 24.1454C31.1701 23.2962 31.2667 22.3859 31.2667 21.4667C31.2667 20.5474 31.1701 19.6372 30.9825 18.7879C30.7949 17.9386 30.5199 17.1669 30.1732 16.5169C29.8265 15.8669 29.415 15.3513 28.962 14.9995C28.5091 14.6477 28.0236 14.4667 27.5333 14.4667ZM33.6 15.4C33.2287 15.4 32.8726 16.0392 32.6101 17.1769C32.3475 18.3146 32.2 19.8577 32.2 21.4667C32.2 23.0756 32.3475 24.6187 32.6101 25.7564C32.8726 26.8942 33.2287 27.5333 33.6 27.5333C33.9713 27.5333 34.3274 26.8942 34.5899 25.7564C34.8525 24.6187 35 23.0756 35 21.4667C35 19.8577 34.8525 18.3146 34.5899 17.1769C34.3274 16.0392 33.9713 15.4 33.6 15.4Z"
                      fill="#3D77DA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2071_19369">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(7 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Dark & light mode */}
              <div className=" rounded-full hover:cursor-pointer w-12 h-12 flex items-center justify-evenly">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto"
                >
                  <path
                    d="M12.2756 24C15.977 24 19.3575 22.316 21.5971 19.5566C21.9284 19.1484 21.5671 18.5521 21.0551 18.6496C15.2331 19.7584 9.88656 15.2945 9.88656 9.41738C9.88656 6.03197 11.6988 2.91886 14.6443 1.24266C15.0983 0.984281 14.9841 0.295922 14.4682 0.200625C13.745 0.0672624 13.0111 0.000109516 12.2756 0C5.65178 0 0.275635 5.3677 0.275635 12C0.275635 18.6239 5.64334 24 12.2756 24Z"
                    fill="#1E2036"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
