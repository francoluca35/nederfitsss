import React, { useRef, useState } from 'react';
import Scanner from '../components/Scanner';

const BarcodeScanner = () => {
    const [scannedData, setScannedData] = useState('');
  
    const handleScan = data => {
      setScannedData(data);
    };
  
    return (
      <div>
        <h1>Escaneo de códigos de barras</h1>
        <Scanner onScan={handleScan} />
        {scannedData && <p>Producto escaneado: {scannedData}</p>}
      </div>
    );
  };
  
  export default BarcodeScanner;