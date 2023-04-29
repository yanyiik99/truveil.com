import classNames from 'classnames';
import './index.css';
import { FiSearch, FiArrowRight, FiPlusCircle } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";


function Button(props) {
  const btn = props.btn;

  switch (btn) {
    case "contactus":
      return (
      <div>
        <button {...props} className={classNames('bg-[#01507D] text-white hover:bg-white hover:border-2 hover:border-[#01507D] hover:text-[#01507D] rounded-full flex items-center justify-center max-w-[200px] py-3 px-6 font-medium text-sm lg:text-lg')}>
            {props.label}
        </button>

      </div>
    );
    case "search":
      return (
      <div>
        <button type='submit' {...props} className={classNames('bg-[#01507D] text-white  rounded-full flex items-center justify-center max-w-[200px] py-2 px-6 font-medium text-sm lg:text-lg mt-10')}>
            {props.label}
            <FiSearch className='ms-3 me-2'>
              test
            </FiSearch>
        </button>

      </div>
    );
    case "ordernow":
      return (
      <div>
        <button type='submit' className={classNames('bg-white text-[#2AA81A]  rounded-full flex items-center justify-center max-w-[200px] py-3 px-6 font-medium text-sm  my-3 shadow-lg')}>
            <AiOutlineWhatsApp className='mr-3 text-xl'>
            </AiOutlineWhatsApp>
            {props.label}
        </button>

      </div>
    );
    case "seedetail":
      return (
      <div>
        <button type='submit' className={classNames('bg-[#01507D] text-white  rounded-full flex items-center justify-center max-w-[200px] py-3 px-6 font-medium text-sm')}>
            {props.label}
            <FiArrowRight className='ms-3 text-xl'>
            </FiArrowRight>
        </button>

      </div>
    );
    case "seemore":
      return (
      <div>
        <button type='submit' className={classNames('bg-transparent text-black flex items-center justify-center max-w-[200px] py-3 px-6 font-medium text-sm lg:text-xl  ')}>
            {props.label}
            <FiArrowRight className='ms-3 text-xl'>
            </FiArrowRight>
        </button>
      </div>
    );
    case "addvilla":
      return (
      <div>
        <button type='submit' className={classNames('bg-[#01507D] text-white rounded-md flex items-center justify-center max-w-[200px] py-3 px-6 font-medium text-sm lg:text-lg  ')}>
            <FiPlusCircle className='mr-3 text-2xl'>
            </FiPlusCircle>
            {props.label}
        </button>
      </div>
    );
    default:
      return (
        <div>ERROR</div>
      )
  }
}

export default Button;