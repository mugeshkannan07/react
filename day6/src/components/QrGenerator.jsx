import React, { useState } from 'react'
import '../css/Qr.css'

export const QrGenerator = () => {

    const [data,setData]=useState("")
    const [img,setImg]=useState("")
    const [size,setSize]=useState(100)
    const [loading,setLoading]=useState(false)
    function generate(){
      setLoading(true)
        try {
            const Url =`http://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
            setImg(Url)
            console.log('Url',Url)
        } catch (err) {
          console.error('Error',err)
        } finally{
          setLoading(false)
        }
    }

    function download() {
      fetch(img).then((response) => response.blob()).then((blob) => {    // blob means normal link to img link converted 
        const link = document.createElement('a');
        link.href=URL.createObjectURL(blob)
        link.download='QrCode.png'
        link.click()
        document.removeChild(link)
      })
    }
  return (
    <>
    <center className='qrCode'>
        <h3>QR Code Generator</h3>
        <input type="text" value={data} placeholder='Enter QR data' onChange={(e)=>setData(e.target.value)}/> <br />

        <input type="text" value={size} placeholder='Enter QR Size' onChange={(e)=>setSize(e.target.value)}/> <br />
        
        <img src={img} alt="" /> <br />
        {loading && <p>Loading...</p>}
        <button onClick={generate}>Generate</button>
        <button onClick={download}>Download</button>
    </center>
    </>
  )
}
