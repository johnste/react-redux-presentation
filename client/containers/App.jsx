import React from 'react';
import { Link } from 'react-router';

export default function App({children}) {
	return (
    <div>
  		<ul>
  			<li><Link to={'/counter'}>Counter example</Link></li>
  			<li><Link to={'/async'}>Async example</Link></li>
  		</ul>
      <div>
        {children}
      </div>
    </div>
	)
}
