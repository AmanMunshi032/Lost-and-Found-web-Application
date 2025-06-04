import React from 'react';

const Slidersection = () => {
    return (
       <>
       <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/zDsGtHYR/dogs-2-HDNR7-R.jpg"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/yYC7Xq0m/dogs-2-HDNR7-T.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/mkfWwM1L/dogs-2-HDNR7-X.jpg"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/BQw9YdK7/dogs-sitting-in-ascending-order-D4-DC4-K.jpg"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>


       </>

       
    );
};

export default Slidersection;