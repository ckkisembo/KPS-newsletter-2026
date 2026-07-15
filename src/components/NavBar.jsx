import React from "react";


// Navbar receives three props from App:
// - pages: the array of { id, label } objects
// - currentPage: the id of the active page ('editorial', 'news', etc.)
// - onNavigate: the function to call when a link is clicked

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">

        {/* Magazine brand/title */}
        <a className="navbar-brand" href="#">KPS '80-86 Back to School</a>

        {/* Bootstrap hamburger button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* .map() turns each object in the pages array into a <li> element.
                Think of it as: "for every page, give me back this JSX."
                
                key={page.id} is required by React — it helps React track
                which item is which when the list updates. */}

            {props.pages.map(page => (
              <li className="nav-item" key={page.id}>
                <a 
                  className={`nav-link ${props.currentPage === page.id ? 'active' : ''}`}
                  onClick={() => props.onNavigate(page.id)}
                  href="#"
                  role="button"
                >
                  {page.label}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;