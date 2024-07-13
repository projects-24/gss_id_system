import React from 'react';

const IDCARD = () => {
  return (
    <div className="padding-30 row-flex gap central">
      <div className="card">
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
        <div className="photo-section">
          <img src="/images/profile.jpg" alt="Field Officer Photo" className="photo" />
        </div>
        <div className="padding-top-20 padding-bottom-20">
          <div className="text-center">
            <div className="text-bold h3">Mary Acheampong</div>
            <div>Field Officer</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <div className="card back_card article">
        <p>
          The Holder of this ID Card is an official of the <span className="text-bold">GHANA STATISTICAL SERVICE</span>
        </p>
        <div>
          <p>If found, please return to:</p>
          <p>
            The Coordinator
            <div>Ghana Core Agriculture Surveys++</div>
            <div>(GCAS++)</div>
            <div>Crop Cutting Operations</div>gi
            <p>
              <div>P.O.BOX GP 1098,</div>
              <div>Accra</div>
            </p>
            <div>Tel: +233 20 700 2804</div>
          </p>
        </div>
        <div>Expiry Date: 15th September 2024</div>
      </div>
    </div>
  );
};

export default IDCARD;
