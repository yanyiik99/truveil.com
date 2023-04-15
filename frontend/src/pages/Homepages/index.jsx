import * as Homepage from '../../components/Homepage'
import * as Layouts from '../../layouts'

function Homepages() {

  return (
    <div className='h-[3000px] font-poppins'>
      <Layouts.Navbar />
      <Homepage.Banner />
      <Homepage.FormFilter />
    </div>
  )
}

export default Homepages