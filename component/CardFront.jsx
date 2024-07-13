import React from 'react'

export default function CardFront({data}) {
  return (
    <div><div className="card front">
    <div className="header">
      <div className="logos">
        <img src="/images/1.png" className="height-30" alt="Logo 1" />
        <img src="/images/2.png" className="height-30" alt="Logo 2" />
        <img src="/images/3.png" className="height-30" alt="Logo 3" />
        <img src="/images/4.png" className="height-30" alt="Logo 4" />
        <img src="/images/5.png" className="height-30" alt="Logo 5" />
      </div>
     <div className="">
     <div className="text-bold h5">GHANA CORE AGRICULTURE SURVEYS++ (GCAS++)</div>
     <div className="text-bold margin-top-10">CROP CUTTING OPERATIONS</div>
     </div>
    </div>
   <p>
   <div className="photo-section" id='profilePicture'>
      <img src="/images/profile.jpg" alt="Field Officer Photo" className="photo" />
    </div>
    <div className="padding-top-20 padding-bottom-20">
      <div className="text-center">
        <div className="text-bold h5">{data.name}</div>
        <div>Field Officer</div>
        <div className='text-bold text-green800'>{data.region}</div>
      </div>
    </div>
   </p>
    <div className="footer"></div>
  </div></div>
  )
}
