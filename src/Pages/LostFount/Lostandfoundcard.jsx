import React from 'react';
import { Link } from 'react-router';

const Lostandfoundcard = ({ditel}) => {
  console.log(ditel)
    const{ _id,photo,TaskTitle, Location,Description,Category,Date,postType }=ditel
    
    return (
              <div className="card bg-base-100 shadow-sm rounded-t-3xl">
  <figure>
    <img className='rounded-t-3xl'
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {TaskTitle}
      <div className="badge badge-secondary">{Category}</div>
    </h2>
    <p>{Description}</p>
    <div className="badge badge-info text-white">{postType}</div>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{Location}</div>
      <div className="badge badge-outline">{ Date}</div>
    </div>
    <Link to={`/Ditelspages/${_id}`}>
    <button className='btn btn-soft btn-secondary w-full'>Details Page</button>
    </Link>
  </div>
</div>
    );
};

export default Lostandfoundcard;