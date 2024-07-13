'use client'
import { URI } from '@/function/uri'
import UiButton from '@/ui/button'
import CardUi from '@/ui/Card'
import CircleUi from '@/ui/Circle'
import LoaderUi from '@/ui/LoaderUi'
import NavBar from '@/ui/NavBar'
import TableUI from '@/ui/Table'
import TextUi from '@/ui/Text'
import Axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { PiEye, PiPrinter } from 'react-icons/pi'
import { PiX } from 'react-icons/pi';
import Modal from 'funuicss/ui/modal/Modal'
import Button from 'funuicss/ui/button/Button'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Text from 'funuicss/ui/text/Text'
import Div from 'funuicss/ui/div/Div'
import CardFront from '@/component/CardFront'
import RowFlexUi from '@/ui/RowFlex'

export default function Record() {
    const [docs, setdocs] = useState('')
    const [modal, setmodal] = useState(false)
    const [filter_region, setfilter_region] = useState('')
    const [all_regions, setall_regions] = useState('')
    const printRef = useRef();

    useEffect(() => {
      Axios.get(URI + '/users')
      .then(res => {
        setdocs(res.data)
        const uniqueValues = Array.from(new Set(res.data.map(item => item['region'])));
        setall_regions(uniqueValues)
    })
      .catch(err => console.error(err))
    }, [docs])


    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    const FilterDocs = () => {
        if(docs.length > 0){
            let res = docs.filter(doc => doc.region === filter_region)
            return  filter_region ? res : docs 
        }
    }
    
if(docs){
    return (
        <div>
            {
                modal && <Button text="Print cards" bold funcss='printBtn' bg="success" startIcon={<PiPrinter />} raised onClick={handlePrint} />
            }
<Modal 
animation="ScaleUp" 
duration={0.4} 
open={modal}
maxWidth="100vw"
close={ <PiX 
    className='pointer '
    onClick={() => setmodal(false) }
    />}
title={
<Div funcss="padding">
</Div>
}
body={
    <div>
     <div className="row central" ref={printRef}>
     {
        FilterDocs().map((doc , i) => (
            <div className="col sm-12 md-6 lg-6 padding" key={i}>
              <center>
              <CardFront data={doc}/>
              </center>
            </div>
        ))
     }
     </div>
</div>
}

/>


            <NavBar />
            
    
            <div className="margin-top-100 padding-bottom-40">
            <div className="container">
            <CardUi 
            funcss='roundEdgeSmall padding-20 fit'
            body={
            <TableUI
            right={<RowFlexUi gap={1}>
                  <select  
            className="dark800 input text-dark200 width-200-max borderless roundEdgeSmall smallInput" 
            //  value={selectedValue || ''} 
             onChange={(e) => {
              FilterDocs(docs)
              setfilter_region(e.target.value)
             }}
             >
              <option value="">All*</option>
              {all_regions.map(item => (
               <>
               {
                item &&
                <option key={item['region']} value={item}>
                {item.toString()}
              </option>
               }
               </>
              ))}
            </select>
             <UiButton bg='primary' rounded onClick={() => setmodal(true)} text='Print' bold startIcon={<PiPrinter />} />
               </RowFlexUi>}
            funcss='text-smaller'
            // filterableFields={['region', 'district']}
            pageSize={40}
            data={docs ? {
              "data": docs,
              "titles": ["picture",'Name', "Email", 'Gender', "Tel(1)", 'Tel(2)', 'Region', "District", "View"],
              "fields": [],
            } : []}
            customColumns={[
              {
                  title: 'Actions',
                  render: (data) => (
                  <div>
                    {
                        data.profile_picture ?
                        <img src={`data:image/png;base64,${data.profile_picture.data}`} className='height-50'/>
                        : <div className="height-50 border padding roundEdgeSmall">

                        </div>
                    }
                  </div>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi bold text={data.name}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.email}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.sex}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.telephone1}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.telephone2}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.region}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <TextUi text={data.district}/>
                  ),
                },
              {
                  title: 'Actions',
                  render: (data) => (
                 <CircleUi bg='primary' onClick={() => window.location.assign(`/card/${data.email}`)} size={2}>
                  <PiEye />
                 </CircleUi>
                  ),
                }
            ]}
            />
            }
            />
            </div>
            </div>
    
        </div>
      )
}else{
    return <LoaderUi />
}
}
