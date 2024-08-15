// components/Layout.js
import { useRouter } from 'next/router';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const excludeNavBarOn = ['/page']; // Add the path of the page(s) where you don't want the Navbar
  console.log('Current Path:', router.pathname);  

  return (
    <>
      {!excludeNavBarOn.includes(router.pathname) && <Navbar/>}
      <main>{children}</main>
    </>
  );
};

export default Layout;
