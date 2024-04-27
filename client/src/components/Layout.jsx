import React from "react";
function Layout({ children }) {
  return (
    <div className="w-full grid md:grid-cols-[1.2fr_2fr_1fr] max-w-7xl gap-y-5 md:gap-10 px-4">
      {children}
    </div>
  );
}
export default Layout;
