import React, { Component } from 'react';

import Footer from './components/footer';
import Menu from './components/navbar';
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
