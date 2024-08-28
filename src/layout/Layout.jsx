

import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className=" w-full mr-auto ml-auto px-[14.75rem]">
     <Outlet />
     </div>
    </>
  )
}

export default Layout