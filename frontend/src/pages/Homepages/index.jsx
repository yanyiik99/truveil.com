import * as Homepage from '../../components/Homepage';
import * as Layouts from '../../layouts';
import * as Component from '../../components';

function Homepages() {

  return (
    <div className='h-[3000px] font-poppins'>
      <Layouts.Navbar />
      <Homepage.Banner />
      <Homepage.FormFilter />
      {/* Year & Monthly */}
      <Homepage.CategoryProduct />
      <Homepage.CategoryProduct />

    </div>
  )
}

export default Homepages;