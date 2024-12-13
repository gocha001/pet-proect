import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar.jsx'
import { FC } from 'react';

const Layout: FC = () => {
  return (
      <div>
          <AppBar />
          <Outlet/>
    </div>
  )
}

export default Layout