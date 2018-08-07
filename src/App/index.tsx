import React from 'react';
import Header from './Layout/Header';
import Sidbar from './Layout/Sidbar';
import Content from './Layout/Content';

import './base.scss';
import '&/style/index.css';

interface Props {
    children: React.ReactNode
}
const App: React.SFC<Props> = (props) => {
    return (
        <div className='container'>
            <Header />
            <Sidbar />
            <Content {...props}/>
        </div>
    )
}
export default App;
