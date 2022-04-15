import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
              <a className="navbar-brand text-danger fw-bold" href="#">NETSCHIFS</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item border-bottom border-4 border-danger mx-1">
                    <Link className="nav-link active" to="/home">Home</Link>
                  </li>
                  <li class="nav-item border-bottom border-4 border-danger mx-1">
                    <Link className="nav-link active" to="#">Impostazioni</Link>
                  </li>
                  <li class="nav-item border-bottom border-4 border-danger mx-1">
                    <Link className="nav-link active" to="#">Assistenza</Link>
                  </li>
                </ul>
                <form class="d-flex">
                  <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
              </div>
          </div>
      </nav>
    );
}