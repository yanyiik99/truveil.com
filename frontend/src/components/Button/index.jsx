import classNames from 'classnames';
import './index.css';
import { FiSearch } from "react-icons/fi";


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
        <button {...props} className={classNames('bg-[#01507D] text-white  rounded-full flex items-center justify-center max-w-[200px] py-2 px-6 font-medium text-sm lg:text-lg mt-10')}>
            {props.label}
            <FiSearch className='ms-2'>
              test
            </FiSearch>
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