import { Outlet } from 'react-router-dom';
import { Navigation } from '../../../components/navigation';
import './navigation-layout.css'

export const NavigationLayout = () => (
  <div className="navigation-layout">
    <div className="container">
      <div className="navigation-bar-layout">
        <Navigation burgerOpen={false} testData='navigation' />
        <Outlet />
      </div>
    </div>
  </div>
);