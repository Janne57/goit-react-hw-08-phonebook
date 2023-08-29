import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
// import { Container, Header, Link } from './Layout.styled';
// import css from './Layout.module.css';

const Layout = () => {
 
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px'}}>
      <AppBar />
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;