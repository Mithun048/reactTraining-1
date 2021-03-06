import React from 'react';

import './App.css';
import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import travel from './images/logo.jpg';
import TourManager from './TourManager/TourManager.react';
import AddTours from './AddTours/AddTours.react';
import MyRoutes from './MyRoutes/MyRoutes.react';
import MyProvider from './MyProvider/MyProvider.react';

import Middle from './Middle/Middle.react';
const  handleClick = (event) =>{

  console.log(event)
  console.log('click event fired');
}
function App() {
  return (
    <div className="App">
<Header majHeading={"Leo Travel Agency"} 
            logo={travel}></Header>
          <MyRoutes></MyRoutes>
          <MyProvider>
           <Middle></Middle>
          </MyProvider>
    <Footer action={handleClick} 
    designer={'Ramesh Infotech'}>

      <p><a href='mailTo:ram@abc.com'>Contact Admin</a></p>
    
    </Footer>
      </div>
  );
}

export default App;
