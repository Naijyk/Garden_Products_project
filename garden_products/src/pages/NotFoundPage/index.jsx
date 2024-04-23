import React from 'react';
import error from './error.png';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={[s.not_found_page, 'wrapper'].join(' ')}>
        <img src={error} alt="error" />
      <div>
        <h1>Page Not Found</h1>
        <p>We’re sorry, the page you requested could not be found.</p>
        <p>Please go back to the homepage.</p>
        <Link to='/'>
          <div>Go Home</div>
        </Link>
      </div>
    </div>
  )
}
