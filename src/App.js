import React, { Component } from 'react';

import Footer from './footer';
import Menu from './navbar';
import Slideshow from './components/slide'

class App extends Component {
  render() {
    return (
   
        <div>
          <header>
            <Menu />
          
            </header>
           <Slideshow />
            <footer>
              <Footer />

            </footer>
           
        
       </div>
    );
  }
}

export default App;
