// components/Layout.js
import { useRouter } from 'next/router';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const excludeNavBarOn = ['/page']; 
  console.log('Current Path:', router.pathname);  

  return (
    <>
      {!excludeNavBarOn.includes(router.pathname) && <Navbar/>}
      <main>{children}</main>
    </>
  );
};

export default Layout;
