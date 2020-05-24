// == Import npm
import React from 'react';
// ==import img
import imgPlat from '../../assets/Images/foodImage.png';
import imgChef from '../../assets/Images/ChefImage.png';
import imgelemt from '../../assets/Images/DesignElement.png';

import iconeAppel from '../../assets/Images/iconeAppel.png';
import iconeAndroid from '../../assets/Images/iconeAndroid.png';


// == Import

import './styles.css';

// == Composant
const App = () => (
  <div className="container">
    <div className="row position-absolute col">
      <div className="fond_gris col-md-2 position-absolut " />
      <div className="fond_vert col-md-5 position-absolut " />
    </div>
    <header className="row justify-content-center text-center">
      <div className="col-md-3 order-md-2">
        LOGO
      </div>
      <div className="col-md-9  order-md-1">
        <h1 className="col-12 header_titre1 display-1">
          TASTY
          <span className="row justify-content-center header_titre2 m-n2">
          SEAFOOD
          </span>
        </h1>
        <div className="col-12 header_titre3 display-4 mb-5">
          Choisi ton plat preferé
        </div>
      </div>
    </header>
    <div className="row justify-content-center align-items-end divImage d-none pt-3 d-md-flex position-relative ">
      <div className="col-md-8 text-right ">
      <img className="imgPlat col-md-10 " src={imgPlat} />
      <img className="col-md-10 position-absolute imgelemt" src={imgelemt} />
      </div>
      <img className="imgChef col-md-4" src={imgChef} />
    </div>
    <div className="row justify-content-center">
      <div className="col-8 mt-5 ">
        <div className="row justify-content-between">



          <div className="col-6 ">
            <div className="row justify-content-center mt-5">
              <div className="col-9 text-center">
                <img className="col-9" src={humberger} />
              </div>
              <h1 className="col-9 text-center item_titre text-uppercase">Menu Hamberger</h1>
              <p className="text-center col-9 item_descrition">letghtrjjjjjjjjjjjjjjjjjjjjjjhf                    kkkkkkkkkkkkkkkkkk
            kkkkkkrtghfghgfhgfhgfhgfhgfhfghgfhgf
              hgfhgfhgfhgfhgfhgfhgfhgfhgfhg
              </p>
              <div className="col-4 item_prix_text text-center my-2"><p className="text-center py-2 h4">Prix</p></div>
              <div className="col-4 item_prix_number py-2"><p className="text-center py-2 h4">12€</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-4">
        <div className="row justify-content-center">
          <div className="contact col-12">
            <p className="text-center">Livraison<br /><span className="contact_span">05625622551555</span> </p>
          </div>
          <div className=" col-10 contact_header text-center pt-3 h3">
            <p>Commande en ligne <br /> WWw.test.com<br /> ............................................</p>
            <div className="col-12">
              <p className="h4">Telecherger l'aplication <br /> Mobile</p>
              <div className="row justify-content-center contact_app py-3">
                <div className="col-6 border-right ">
                  <img src={iconeAndroid} />
                </div>
                <div className="col-6 ">
                  <img src={iconeAppel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

// == Export
export default App;
