/**
 * @file App.js
 * @author Jack Stubblefield
 * @description coming soon
 */

import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import FloatNavigationMenuStyle from './TopNav';


class App extends Component {
    render() { 
        return (
            <>
            {/* <Header/> */}
            <FloatNavigationMenuStyle/>
            <Main/>
            </>
        );
    }
}
 
export default App;
