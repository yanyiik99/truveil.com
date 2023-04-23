import * as Layout from '../../layouts';
import { FiArrowLeft } from "react-icons/fi";
import * as Component from '../../components';

function SearchProperty() {
  return (
    <div>

        {/* Start Banner */}
        <Layout.Navbar />
        <div id='bg-detailproperty' className='flex justify-center items-center relative text-white'>
            <Layout.Container>
            <div className='absolute top-5 left-5'>
                <FiArrowLeft className='text-2xl'></FiArrowLeft>
            </div>
            <div >
                <h1 className='underline text-4xl md:text-5xl text-center '>PropertyList</h1>
            </div>
            </Layout.Container>
        </div>
        {/* End Banner */}

        {/* Start Filter */}
        <Component.FilterAccordion />
        {/* End Filter Accordion */}
        
    </div>
  )
}

export default SearchProperty;