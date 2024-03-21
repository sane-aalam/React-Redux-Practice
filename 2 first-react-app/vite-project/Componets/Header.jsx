
import React from "react";
import '../Style/Header.css'

function Header() {
    return (
       <header className="header">
           <img id="logo-select" src="https://cdn.logojoy.com/wp-content/uploads/20200506163720/34-600x314.png" alt="Company Logo" className="logo" />
           <nav>
               <ul>
                      <li><a href="/">Home</a></li>
                       <li><a href="/about">About</a></li>
                      <li><a href="/services">Services</a></li>
                       <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>
       </header>
   );
}

export default Header;