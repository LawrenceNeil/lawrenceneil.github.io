import React from 'react'
import QRCode from 'qrcode'
import { useState } from 'react'


const Rightbar = () => {
  const [temp, setTemp] = useState('')
  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
  const crypto=require("crypto-js/sha256")
  
  
  const data = crypto(temp).toString()
  
  console.log(data)
  const GenerateQRCode = () => {
		QRCode.toDataURL(data, {
			width: 177,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		},
     (err, data) => {
			if (err) return console.error(err)

			console.log(data)
			setQr(data)
		})
  }
 
  
  return (
    <div>
      <h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={temp}
				onChange={e => setTemp(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
        <img src={qr} />
      </>}
    </div>
  )
}

export default Rightbar