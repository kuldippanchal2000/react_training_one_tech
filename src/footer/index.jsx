import React from 'react';

function Footer() {
  return (
    <div className="text-center text-decoration-none p-3 mb-0 mt-5 sticky-bottom bg-dark opacity-50 text-white h3">
      &copy; {new Date().getFullYear()}
      -project
    </div>
  );
}

export default Footer;
