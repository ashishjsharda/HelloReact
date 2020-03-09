import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi() {
    return <div>
        <h1> Hello React</h1>
    </div>
    
}
ReactDOM.render(<Hi/>, document.getElementById('root'));

