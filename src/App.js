import React, { Component } from 'react';

import Footer from './footer';
import Menu from './navbar';


class App extends Component {
  render() {
    return (
   
        <div>
          <header>
            <Menu />
          
            </header>
        
            <footer>
              <Footer />

            </footer>
           
        
       </div>
    );
  }
}

export default App;
