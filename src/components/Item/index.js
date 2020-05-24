import React from 'react';


const Item = () => (
  <div className="col-6 ">
    <div className="row justify-content-center mt-5">
      <div className="col-9 text-right">
        <span className=" divPromo p-3 align-top rounded-circle ">-20% </span>
        <img className="col-9 mt-n3" src={humberger} />
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
);
export default Item;
