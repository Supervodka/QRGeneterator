import { useState } from 'react';
import './App.css';
import  QRCode  from 'qrcode';
import LiveQrCode from './components/live-qr-code';
import BasicInput from './ui/basic-input';

function App() {
  const [qrCode,setQRCode] = useState('')
  const [qrText,setQRText] = useState('')

  const generateQRCode = () => {
    QRCode.toDataURL(
      qrText,
   {
    width:900,
    
    height:3,
   },
   (err,url)=>{
    if(err) return console.log(err)
    setQRCode(url)
   }
    )
  }
  const handleQRCode = e =>{
    setQRText(e.target.value)
    generateQRCode()
  }
  return (
    <div className="App">
     <LiveQrCode value = {qrText}/>
     <BasicInput label = "qr code text" type = 'text' value = {qrText} onChange = {handleQRCode} style = {{marginTop:20}} />
     <br/>
     <a href = {qrCode} download = {`${qrText}.png`}>download</a>
    </div>
  );
}

export default App;
