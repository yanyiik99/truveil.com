
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Container from '../Container';
import { Menu, Transition } from '@headlessui/react';

function Navbar() {
  return (
    <section>
      <div className='bg-gradient-to-r from-[#034A73] to-[#387294] '>
        <Container>
          <div className='relative flex justify-between items-center h-16'>
            {/* Left Side */}
            <div className='relative'>
              <div className='relative'>
                <div className="relative">
                  <Menu as="div" className="relative inline-block text-right">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white text-black px-4 py-1 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Language
                        <span className='font-bold ms-2'>
                          <UsFlag className="w-5 h-5 mr-2" />
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-sky-400 text-white' : 'text-gray-900'
                                } group w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <div className='flex justify-between'>
                                  <div>
                                    English (US)
                                  </div>
                                  <div>
                                    <UsFlag className="w-5 h-5 mr-2" />
                                  </div>
                                </div>
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-sky-400 text-white' : 'text-gray-900'
                                }  group w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <div className='flex justify-between'>
                                  <div>
                                    Indonesia 

                                  </div>
                                  <div>
                                    <IndonesiaFlag className="w-5 h-5 mr-2" />
                                  </div>
                                </div>
                              </button>
                            )}
                          </Menu.Item>

                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className='relative'>
              <div className="relative text-right">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white text-black px-4 py-1 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Currency
                      <span className='font-bold ms-2'>IDR</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-sky-400 text-white' : 'text-gray-900'
                              } group w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <div className='flex justify-between'>
                                <div>
                                  US Dollar
                                </div>
                                <div>
                                  <UsFlag className="w-5 h-5 mr-2" />
                                </div>
                              </div>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-sky-400 text-white' : 'text-gray-900'
                              } group w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <div className='flex justify-between'>
                                <div>
                                  Indonesia Rupiah

                                </div>
                                <div>
                                  <IndonesiaFlag className="w-5 h-5 mr-2" />
                                </div>
                              </div>
                            </button>
                          )}
                        </Menu.Item>

                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}


function IndonesiaFlag(props) {
  return (
    <svg {...props} width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_94_2)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H80V31.125H0V0Z" fill="#E70011"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30H80V60H0V30Z" fill="white"/>
      </g>
      <rect x="0.5" y="0.5" width="79" height="59" stroke="black"/>
      <defs>
        <clipPath id="clip0_94_2">
          <rect width="80" height="60" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  );
}

function UsFlag(props) {
  return (
    <svg {...props} width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_94_237)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H114V4.61725H0V0ZM0 9.23438H114V13.8516H0V9.23438ZM0 18.457H114V23.0859H0V18.457ZM0 27.6914H114V32.3086H0V27.6914ZM0 36.9258H114V41.543H0V36.9258ZM0 46.1484H114V50.7656H0V46.1484ZM0 55.3828H114V60H0V55.3828Z" fill="#BD3D44"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 4.61731H114V9.23443H0V4.61731ZM0 13.8516H114V18.4571H0V13.8516ZM0 23.0743H114V27.6914H0V23.0743ZM0 32.3087H114V36.9258H0V32.3087ZM0 41.5431H114V46.1602H0V41.5431ZM0 50.7657H114V55.3829H0V50.7657Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H45.5976V32.3086H0V0Z" fill="#192F5D"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.79681 1.38293L4.21869 2.66006H5.55469L4.47644 3.44531L4.88669 4.73431L3.79681 3.93743L2.71869 4.72256L3.12881 3.44531L2.03906 2.66006H3.39844L3.79681 1.38293ZM11.4023 1.38293L11.8124 2.66006H13.1601L12.0702 3.44531L12.4804 4.73431L11.4023 3.93743L10.3124 4.72256L10.7226 3.44531L9.64444 2.66006H10.9804L11.4023 1.38293ZM18.9961 1.38293L19.4179 2.66018H20.7422L19.6641 3.44543L20.0741 4.73443L18.9843 3.93756L17.9062 4.72268L18.3163 3.44543L17.2264 2.66018H18.5742L18.9961 1.38293ZM26.6016 1.38293L27.0116 2.66018H28.3593L27.2694 3.44543L27.6913 4.73443L26.6014 3.93756L25.5117 4.72268L25.9336 3.44543L24.8437 2.66018H26.1797L26.6016 1.38293ZM34.1953 1.38293L34.6172 2.66018H35.9531L34.8749 3.44543L35.2851 4.73443L34.1952 3.93756L33.1171 4.72268L33.5273 3.44543L32.4492 2.66018H33.7851L34.1953 1.38293ZM41.8007 1.38293L42.2108 2.66018H43.5586L42.4687 3.44543L42.8906 4.73443L41.8007 3.93756L40.7108 4.72268L41.1327 3.44543L40.0429 2.66018H41.3906L41.8007 1.38293ZM7.60544 4.61706L8.01556 5.89456H9.36319L8.27331 6.67956L8.67181 7.95706L7.61706 7.17181L6.52731 7.95693L6.91394 6.67968L5.85931 5.89443H7.19531L7.60544 4.61706ZM15.1992 4.61706L15.6211 5.89456H16.9569L15.8671 6.67956L16.2891 7.95706L15.1991 7.17181L14.1093 7.95693L14.5312 6.67968L13.4413 5.89443H14.7889L15.1992 4.61706ZM22.8047 4.61706L23.2147 5.89456H24.5624L23.4726 6.67956L23.8827 7.95706L22.8046 7.17181L21.7148 7.95693L22.1249 6.67981L21.0468 5.89456H22.3828L22.8047 4.61706ZM30.3984 4.61706L30.8203 5.89456H32.1562L31.0663 6.67956L31.4882 7.95706L30.3983 7.17181L29.3202 7.95693L29.7304 6.67968L28.6406 5.89443H29.9999L30.3984 4.61706ZM38.0038 4.61706L38.4139 5.89456H39.7617L38.6718 6.67956L39.0819 7.95706L38.0038 7.17181L36.9139 7.95693L37.3242 6.67968L36.2461 5.89443H37.5819L38.0038 4.61706ZM3.79681 7.84006L4.21869 9.14081H5.55469L4.47644 9.92593L4.88669 11.2033L3.79681 10.4064L2.71869 11.2033L3.12881 9.91418L2.03906 9.12918H3.39844L3.79681 7.84006ZM11.4023 7.84006L11.8124 9.12881H13.1601L12.0702 9.91393L12.4804 11.1914L11.4023 10.3944L10.3124 11.1913L10.7226 9.90231L9.64444 9.11718H10.9804L11.4023 7.84006ZM18.9961 7.84006L19.4179 9.12906H20.7422L19.6641 9.91418L20.0741 11.1917L18.9843 10.3947L17.9062 11.1916L18.3163 9.90256L17.2264 9.11743H18.5742L18.9961 7.84006ZM26.6016 7.84006L27.0116 9.12906H28.3593L27.2694 9.91418L27.6913 11.1917L26.6014 10.3947L25.5117 11.1916L25.9336 9.90256L24.8437 9.11743H26.1797L26.6016 7.84006ZM34.1953 7.84006L34.6172 9.12906H35.9531L34.8749 9.91406L35.2851 11.1916L34.1952 10.3946L33.1171 11.1914L33.5273 9.90244L32.4492 9.11731H33.7851L34.1953 7.84006ZM41.8007 7.84006L42.2108 9.12906H43.5586L42.4687 9.91418L42.8906 11.1917L41.8007 10.3947L40.7108 11.1916L41.1327 9.90256L40.0429 9.11743H41.3906L41.8007 7.84006ZM7.60544 11.0743L8.01556 12.3517H9.36319L8.27331 13.1367L8.68356 14.4258L7.60544 13.6289L6.51556 14.4141L6.92569 13.1368L5.84756 12.3517H7.18369L7.60544 11.0743ZM15.1992 11.0743L15.6211 12.3517H16.9569L15.8671 13.1367L16.2891 14.4258L15.1991 13.6289L14.1093 14.4141L14.5312 13.1368L13.4413 12.3517H14.7889L15.1992 11.0743ZM22.8047 11.0743L23.2147 12.3517H24.5624L23.4726 13.1367L23.8827 14.4258L22.8046 13.6289L21.7148 14.4141L22.1249 13.1368L21.0468 12.3517H22.3828L22.8047 11.0743ZM30.3984 11.0743L30.8203 12.3517H32.1562L31.0781 13.1367L31.4882 14.4258L30.3983 13.6289L29.3202 14.4141L29.7304 13.1368L28.6406 12.3517H29.9999L30.3984 11.0743ZM38.0038 11.0743L38.4139 12.3517H39.7617L38.6718 13.1367L39.0819 14.4258L38.0038 13.6289L36.9139 14.4141L37.3242 13.1368L36.2461 12.3517H37.5819L38.0038 11.0743ZM3.79681 14.3087L4.21869 15.5861H5.55469L4.47644 16.3711L4.88669 17.6602L3.79681 16.8633L2.71869 17.6484L3.12881 16.3712L2.03906 15.5861H3.39844L3.79681 14.3087ZM11.4023 14.3087L11.8124 15.5861H13.1601L12.0702 16.3711L12.4804 17.6486L11.4023 16.8633L10.3124 17.6484L10.7226 16.3712L9.64444 15.5861H10.9804L11.4023 14.3087ZM18.9961 14.3087L19.4179 15.5861H20.7422L19.6641 16.3711L20.0741 17.6602L18.9843 16.8633L17.9062 17.6484L18.3163 16.3712L17.2264 15.5861H18.5742L18.9961 14.3087ZM26.6016 14.3087L27.0116 15.5861H28.3593L27.2694 16.3711L27.6913 17.6602L26.6014 16.8633L25.5117 17.6484L25.9336 16.3712L24.8437 15.5861H26.1797L26.6016 14.3087ZM34.1953 14.3087L34.6172 15.5861H35.9531L34.8749 16.3711L35.2851 17.6602L34.1952 16.8633L33.1171 17.6484L33.5273 16.3712L32.4492 15.5861H33.7851L34.1953 14.3087ZM41.8007 14.3087L42.2108 15.5861H43.5586L42.4687 16.3711L42.8906 17.6602L41.8007 16.8633L40.7108 17.6484L41.1327 16.3712L40.0429 15.5861H41.3906L41.8007 14.3087ZM7.60544 17.5431L8.01556 18.8204H9.36319L8.27331 19.6054L8.68356 20.8829L7.60544 20.0861L6.51556 20.8829L6.92569 19.5938L5.84756 18.8087H7.18369L7.60544 17.5431ZM15.1992 17.5431L15.6211 18.8204H16.9569L15.8671 19.6054L16.2891 20.8829L15.1991 20.0861L14.1093 20.8829L14.5312 19.5938L13.4413 18.8087H14.7889L15.1992 17.5431ZM22.8047 17.5431L23.2147 18.8204H24.5624L23.4726 19.6054L23.8827 20.8829L22.8046 20.0861L21.7148 20.8829L22.1249 19.5938L21.0468 18.8087H22.3828L22.8047 17.5431ZM30.3984 17.5431L30.8203 18.8204H32.1562L31.0781 19.6054L31.4882 20.8829L30.3983 20.0861L29.3202 20.8829L29.7304 19.5938L28.6406 18.8087H29.9999L30.3984 17.5431ZM38.0038 17.5431L38.4139 18.8204H39.7617L38.6718 19.6054L39.0819 20.8829L38.0038 20.0861L36.9139 20.8829L37.3242 19.5938L36.2461 18.8087H37.5819L38.0038 17.5431ZM3.79681 20.7657L4.21869 22.0548H5.55469L4.47644 22.8398L4.88669 24.1056L3.79681 23.3204L2.71869 24.1054L3.12881 22.8282L2.03906 22.0431H3.39844L3.79681 20.7657ZM11.4023 20.7657L11.8124 22.0548H13.1601L12.0702 22.8398L12.4922 24.1056L11.4022 23.3204L10.3124 24.1054L10.7343 22.8282L9.64444 22.0431H10.9804L11.4023 20.7657ZM18.9961 20.7657L19.4179 22.0548H20.7422L19.6641 22.8398L20.0741 24.1056L18.9843 23.3204L17.9062 24.1054L18.3163 22.8282L17.2264 22.0431H18.5742L18.9961 20.7657ZM26.6016 20.7657L27.0116 22.0548H28.3593L27.2694 22.8398L27.6913 24.1056L26.6014 23.3204L25.5117 24.1054L25.9336 22.8282L24.8437 22.0431H26.1797L26.6016 20.7657ZM34.1953 20.7657L34.6172 22.0548H35.9531L34.8749 22.8398L35.2851 24.1056L34.1952 23.3204L33.1171 24.1054L33.5273 22.8282L32.4492 22.0431H33.7851L34.1953 20.7657ZM41.8007 20.7657L42.2108 22.0548H43.5586L42.4687 22.8398L42.8906 24.1056L41.8007 23.3204L40.7108 24.1054L41.1327 22.8282L40.0429 22.0431H41.3906L41.8007 20.7657ZM7.60544 24.0001L8.01556 25.2774H9.36319L8.27331 26.0626L8.68356 27.3517L7.60544 26.5548L6.51556 27.3398L6.92569 26.0626L5.84756 25.2774H7.18369L7.60544 24.0001ZM15.1992 24.0001L15.6211 25.2774H16.9569L15.8671 26.0626L16.2891 27.3517L15.1991 26.5548L14.1093 27.3398L14.5312 26.0626L13.4413 25.2774H14.7889L15.1992 24.0001ZM22.8047 24.0001L23.2147 25.2774H24.5624L23.4726 26.0626L23.8827 27.3517L22.8046 26.5548L21.7148 27.3398L22.1249 26.0626L21.0468 25.2774H22.3828L22.8047 24.0001ZM30.3984 24.0001L30.8203 25.2774H32.1562L31.0781 26.0626L31.4882 27.3517L30.3983 26.5548L29.3202 27.3398L29.7304 26.0626L28.6406 25.2774H29.9999L30.3984 24.0001ZM38.0038 24.0001L38.4139 25.2774H39.7617L38.6718 26.0626L39.0819 27.3517L38.0038 26.5548L36.9139 27.3398L37.3242 26.0626L36.2461 25.2774H37.5819L38.0038 24.0001ZM3.79681 27.2344L4.21869 28.5118H5.55469L4.47644 29.2969L4.88669 30.5743L3.79681 29.7892L2.71869 30.5742L3.12881 29.2852L2.03906 28.5001H3.39844L3.79681 27.2344ZM11.4023 27.2344L11.8124 28.5118H13.1601L12.0702 29.2969L12.4922 30.5743L11.4022 29.7892L10.3124 30.5742L10.7343 29.2852L9.64444 28.5001H10.9804L11.4023 27.2344ZM18.9961 27.2344L19.4179 28.5118H20.7422L19.6874 29.2969L20.0976 30.5743L19.0077 29.7892L17.9296 30.5742L18.3398 29.2852L17.2499 28.5001H18.5976L18.9961 27.2344ZM26.6016 27.2344L27.0116 28.5118H28.3593L27.2694 29.2969L27.6913 30.5743L26.6014 29.7892L25.5117 30.5742L25.9336 29.2852L24.8437 28.5001H26.1797L26.6016 27.2344ZM34.1953 27.2344L34.6172 28.5118H35.9531L34.8749 29.2969L35.2851 30.5743L34.1952 29.7892L33.1171 30.5742L33.5273 29.2852L32.4492 28.5001H33.7851L34.1953 27.2344ZM41.8007 27.2344L42.2108 28.5118H43.5586L42.4687 29.2969L42.8906 30.5743L41.8007 29.7892L40.7108 30.5742L41.1327 29.2852L40.0429 28.5001H41.3906L41.8007 27.2344Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_94_237">
          <rect width="80" height="60" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}


export default Navbar;