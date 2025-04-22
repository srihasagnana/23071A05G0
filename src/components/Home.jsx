import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1 className="text-center">Welcome</h1>
      <ul className="nav justify-content-center bg-light p-2">
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/contact">About Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/aboutpage">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
