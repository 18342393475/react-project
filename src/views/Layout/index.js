import {Outlet} from 'react-router-dom'
function Layout(){
    return (
        <div>
            this is Layout
            <Outlet />
        </div>
    )
}

export default Layout