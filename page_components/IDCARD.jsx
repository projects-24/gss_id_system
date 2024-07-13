'use client'
import CardBack from '@/component/CardBack';
import CardFront from '@/component/CardFront';
import React, { useEffect } from 'react';

const IDCARD = ({data}) => {

  useEffect(() => {
    if (data.profilePic) {
      const img = `
      <img src="data:image/png;base64,${data.profilePic}" alt="Profile Picture" class="photo" />
    `
      document.getElementById('profilePicture').innerHTML = img
    }
  },[data])
  return (
    <div className="padding-30 row-flex gap central">
      {
        <CardFront data={data} />
      }
   {
    <CardBack data={data} />
   }
    </div>
  );
};

export default IDCARD;
