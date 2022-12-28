import React from 'react';
import Header from '../header';
import AppRoutes from '../appRoutes';
import Footer from '../footer';

function Layout() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default Layout;
