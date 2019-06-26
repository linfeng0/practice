import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './containers/Navbar/Navbar';
import Content from './containers/Content/Content'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Nav />
        <Content />
    </div>,
     document.getElementById('root')
);


serviceWorker.unregister();
