// == Import npm
import React from 'react';
import imgPlat from '../../assets/Images/foodImage.png';
import imgChef from '../../assets/Images/ChefImage.png';
import imgelemt from '../../assets/Images/DesignElement.png';


// == Import

import './styles.css';

// == Composant
const App = () => (
  <div className="container">
    <div className="row position-absolute w-100 ">
      <div className="fond_gris" />
      <div className="fond_vert" />

    </div>
    <header className="row justify-content-center text-center">
      <div className="col-8 ">
        <h1 className="col-12 header_titre1">
          TASTY
          <span className="row justify-content-center header_titre2 m-n2">
          SEAFOOD
          </span>
        </h1>
        <div className="col-12 header_titre3">
          Choisi ton plat preferé
        </div>
      </div>
      <div className="col-4">
        LOGO
      </div>
    </header>
    <div className="row justify-content-center align-items-end divImage ">
      <img className="imgPlat col-6 h-25 " src={imgPlat} />
      <img className="imgChef col-4" src={imgChef} />
    </div>
    <div className="row justify-content-center">
      <div className=" col-6" />
      <div className=" col-4">
        <div className="row justify-content-center">
          <p className="text-center">Telephone <br /><span>05625622551555</span></p>
        </div>
      </div>
    </div>

  </div>
);

// == Export
export default App;
