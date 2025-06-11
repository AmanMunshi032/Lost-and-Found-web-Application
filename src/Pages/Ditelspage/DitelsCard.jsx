import React from 'react';
import Model from '../../Components/Model/Model';

const DitelsCard = ({ditels}) => {
    const{TaskTitle,photo,Date,Location,Category,Description,postType}=ditels?.[0]|| {}
    console.log(ditels)
    return (
        <div className='md:w-2xl mx-auto  my-6 p-8 bg-gray-100 shadow-sm rounded-2xl'>
         <div className='flex justify-center items-center'>
        <img className=' w-xl rounded-2xl' src={photo}alt="" />
         </div>
         <div className='flex justify-center items-center mt-4'>
          <div>
              <h1><span className='text-xl font-bold'>TaskTitle : </span>{TaskTitle}</h1>
            <p><span className='text-xl font-bold'>postType :</span>{postType}</p>
            <p><span className='text-xl font-bold' >Date:</span>{Date}</p>
            <p><span className='text-xl font-bold' >Category:</span>{Category}</p>
            <p><span className='text-xl font-bold' >Location:</span>{Location}</p>
            <p><span className='text-xl font-bold' >Description:</span>{Description}</p>
          </div>
         </div>
         <div>
            {
            postType == "Found" ? <>
<button className="btn btn-error w-full" onClick={()=>document.getElementById('my_modal_3').showModal()}> Found This!</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <Model></Model>
  </div>
</dialog>
            </>

            :<>
           <button className="btn btn-info w-full" onClick={()=>document.getElementById('my_modal_3').showModal()}> This is Mine!</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <Model></Model>
  </div>
</dialog>
            </>
            }
          
         </div>
        </div>
    );
};

export default DitelsCard;