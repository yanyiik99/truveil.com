import { FiGrid, FiFileText, FiPlusCircle, FiLogOut, FiChevronsLeft, FiChevronsRight, FiAlignRight, FiX } from "react-icons/fi";
import './index.css';
import Logo from '../../assets/img/logo.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import {useEffect, useState } from "react";






const sidebar = [
  {
    "title"     : "Dashboard",
    "icon"      : FiGrid,
    "link"      : "/admin/dashboard",
},
{
    "title"     : "List Villa",
    "icon"      : FiFileText ,
    "link"      : "/admin/listvilla",
},
{
    "title"     : "Add Villa",
    "icon"      : FiPlusCircle ,
    "link"      : "/admin/addvilla",
},
{
    "title"     : "Logout",
    "icon"      : FiLogOut,
    "link"      : "/admin/logout",
},
]


function Sidebar({children}) {
  const location = useLocation().pathname;
  const [hide, setHide] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  // console.log(hide);
  // console.log(showBurger);

  return (
    <>
    <div className="relative">

      <div className="w-full bg-white relative">

        {/* Start Header */}
        <div className={classNames(hide == true ? 'w-full lg:w-11/12 transform duration-300 ease-in' : 'w-full lg:w-5/6 transform duration-200 ease-out' ,'h-24 absolute flex justify-end lg:justify-start items-center top-0 right-0 bg-white')}>
            {/* Start Hide Sidebar lg */}
            <div className="hidden lg:flex items-center ms-8">
                <button onClick={()=>{
                    return setHide(!hide);
                }}>
                  {
                    hide == true ? <FiChevronsLeft className="text-2xl"></FiChevronsLeft> : <FiChevronsRight className="text-2xl"></FiChevronsRight> 

                  }
                </button>
            </div>
            {/* End Hide Sidebar lg */}

            {/* Start Humberger SMALL */}
            <div className="flex lg:hidden justify-end me-10">
              <button onClick={()=>{
                return setShowBurger(!showBurger);
              }}>
                <FiAlignRight className="text-2xl"></FiAlignRight>
              </button>
            </div>
            {/* End Humberger SMALL */}
        </div>
        {/* End Header */}
        
        {/* Start Child Content */}
        <div className={classNames(hide == true ? 'w-full lg:w-11/12 transform duration-300 ease-in' : 'w-full lg:w-5/6 transform duration-200 ease-out' ,'absolute right-0 mt-36 ms-16 px-4 lg:px-16 mx-auto')}>
          <div className="relative bg-white rounded-sm p-6 mb-20">
            {
              children
            }
          </div>
        </div>
        {/* End Child Content */}

      </div>
      
      {/* Start Sidebar lg */}
      <div id='sidebar' className={classNames(hide == true ? 'w-1/12 transform ease-in duration-300' : 'w-1/6 transform ease-out duration-300' , 'hidden lg:block fixed h-full left-0 top-0 bg-[#316D90]')} >
          <div>
            <div className="flex flex-col items-center justify-center py-5">
              <div>
                <img className={classNames(hide == true ? 'h-14 transform duration-100 ease-in-out' : 'h-20  transform duration-200 ' ,'w-auto')} src={Logo} alt="truveil" />
              </div>
              {
                hide == true ?               
                  <span></span>
                :
                  <div className="mt-6">
                    <h2 className="text-2xl text-white font-semibold">Admin</h2>
                  </div>
              }

            </div>
            <hr className="mb-5"/>
            <ul>
              {
                sidebar.map((el, key)=>{
                  const Icon = el.icon;
                  return(
                      <li key={key} className="py-3 px-3">
                        {/* bg-[#4F99C5] */}
                        <Link to={el.link} className={classNames(location == el.link ? 'bg-[#4F99C5] text-white' : 'bg-transparent text-[#7BAECC] hover:text-white', 'flex items-center py-3 px-4  rounded-lg')}> 
                          <span className="pe-5 text-xl">
                            <Icon />
                          </span>
                          {
                            hide == true ? '' : el.title
                          }
                        </Link>
                      </li>
                  );
                })
              }
            </ul>
          </div>
      </div>
      {/* End Sidebar lg */}

      {/* Start Sidebar SMALL */}
      <div className={classNames(showBurger == false ? 'hidden' : 'block' ,'fixed w-full h-screen bg-[#316D90] opacity-90')}>
          <div className="m-5">
            <button onClick={()=>{
              return setShowBurger(!showBurger);
            }}>
                <FiX className="text-2xl text-white"></FiX>
            </button>
          </div>
          <div>
            <img className="w-auto h-16 mx-auto" src={Logo} alt="logo" />
          </div>
          <ul className="mt-5">
              {
                sidebar.map((el, key)=>{
                  const Icon = el.icon;
                  return(
                      <li key={key} className="flex flex-col items-center">
                        {/* bg-[#4F99C5] */}
                        <Link to={el.link} className={classNames(location == el.link ? 'bg-[#4F99C5] text-white rounded-lg' : 'bg-transparent text-white hover:text-white', 'px-5 py-3 my-4')}> 
                          {
                            hide == true ? '' : el.title
                          }
                        </Link>
                      </li>
                  );
                })
              }
            </ul>
      </div>
      {/* End Sidebar SMALL */}
      

    </div>
    
    </>
  )
}

export default Sidebar