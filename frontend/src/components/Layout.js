import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
      <Header />
      <main style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
