import React from 'react';
import { Link } from 'react-router';

const Lostandfoundcard = ({ditel}) => {
    const{ _id,photo,TaskTitle, Location,Description,Category,Date,postType }=ditel
    return (
              <div className="card bg-base-100 shadow-sm rounded-t-3xl">
  <figure>
    <img className='rounded-t-2xl'
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {TaskTitle}
      <div className="badge  bg-cyan-300">{Category}</div>
    </h2>
    <p>{Description}</p>
    <div className="badge bg-cyan-300 ">{postType}</div>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{Location}</div>
      <div className="badge badge-outline">{ Date}</div>
    </div>
    <Link to={`/Ditelspages/${_id}`}>
    <button className='btn  text-orange-500 hover:bg-cyan-300 w-full'>Details Page</button>
    </Link>
  </div>
</div>
    );
};

export default Lostandfoundcard;