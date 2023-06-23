import { Outlet } from 'react-router-dom';
import { Footer } from '../../../footer';
import { Header } from '../../../header';
import './layout.css';

export const Layout = () => (
  <div className='layout'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);