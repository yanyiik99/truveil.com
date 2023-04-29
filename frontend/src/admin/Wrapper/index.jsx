import * as admin from '../../admin'

function Wrapper({children}) {
  return (
    <div>
        <section className='w-screen h-screen overflow-x-hidden bg-gray-200'>
            <admin.Sidebar>
                {children}
            </admin.Sidebar>
        </section>
    </div>
  )
}

export default Wrapper