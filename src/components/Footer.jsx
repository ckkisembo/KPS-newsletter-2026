import React from "react";

function Footer(props) {
  return (
    <div className="container">
      <footer className="py-3 my-4">

        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {props.pages.map(page => (
            <li className="nav-item" key={page.id}>
                <a              
                href="#"
                className={`nav-link px-2 ${props.currentPage === page.id ? 'text-body' : 'text-body-secondary'}`}
                onClick={() => props.onNavigate(page.id)}
              >
                {page.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-body-secondary">
          © {new Date().getFullYear()} '80-86 Back to School
        </p>

      </footer>
    </div>
  );
}

export default Footer;

