import React from 'react'

export default function CardBack({data}) {
  return (
    <div>
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
            <div>Crop Cutting Operations</div>
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
  )
}
