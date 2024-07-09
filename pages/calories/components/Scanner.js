'use client'
import React, { useEffect, useRef } from 'react';
import { BarcodePicker, ScanSettings } from 'scandit-sdk';

const Scanner = ({ onScan }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const initializeScanner = async () => {
      // Verificar si estamos en el entorno del navegador antes de inicializar Scandit SDK
      if (typeof window !== 'undefined') {
        // Crear un nuevo objeto BarcodePicker
        const barcodePicker = await BarcodePicker.create(videoRef.current, {
          // Configuración de Scandit, por ejemplo:
          licenseKey: 'AvHkTWH0RbwJD5nC6gk0L3I14pFUOfSbEShRnNUqJSqqH1Qk61toS5dtvfgISHvzM1G8waFRaDh2Y8hmbHsr885VUH4aG9yP7yEFdTtviXYxICGVRBqUuvUoNO8eQJwG8ABSYzNdX08Zb0CGbVaKgsEiUe8UZ1E4un7FPIBAkvUgU1aR5nDHekFJkk0RX7RsGU6e21pDwxnLIcE3JU8MjYlNiF5BFRJQskGb5Bla6+nDaGl6t3D+LoRD/hNURL+U/FluQAYT3sljdlif+HqPu6JfzVdgdciMC0uRLoNpTQn+f526MXI4eQdw3EulUbovX2WOv8dyMXwXRYLKsV0dMaRpOToTMCzuRi42Qg14vwodMeB4ZiY7bzRkZz30dY1/hS+XyI5brKJ5Icv6jUHHA4ZfBD5iax3IsF2A5/lfWSEIffrz7m9NXPB7xne1eJDtKmLF9ZBjC1qMR95zziRLV9Bw1eUFRnLMGWRhiqhudU9mT/mkWk0n4rEIM4tFTGDBsAwXtZls0bUdcQxFI30lGQUPyNOZEXvF2HFOYhO5RRKzyNSHOtPwwRdWBZk0mhpJCz3vE+Ht4I7zavYLk6JElmYNONmPxHeVlEuM8uW0Z38T+/RVxUZKcULubZhqYDC9sV+kCMDq4Q1xUa7ZZO5wqGS6zI9gQWBZ/8orSY24FsxZNBQ7iegKyObWfDNiA7il1pJgPGmO6bxgsBAj74dx0XG61EhThB20Q14+uW3Vuym80kY+Y3JwpXR0SsB6gIsL3ISCsSVc55MqR/2/CM50XKPS3CMwA4s5h4OTt63LIIzHmAiEKro+H6Ppr5e311Y1sGefTcCgBb1eO0rCYFLZSVzyknjZNLstj4FqJo8Lm1eUND1JyCVWm6c1TA6rNyOSrqMBDGzqQZ+lYlmkK/UMsz/eVdn1LarCcMwndnMN3wFWyyRXU407b4M5IuJXRvyAqIwz9gj3Z6k5uOmn0hpfnteP+NGU+cb41s/x5QssbYfGNjg/SvpXFvT6ZFH5PfzaGU+g/J5cxQApNHM42NW/fa/Qb4X7xG6DWJGVmanMfhnZzq3XP8mMbu2Ua8iGVPdq5tCLeMmfDald526cCaTwnSfJh7gs0JonTk7CmJ+YI5GnNQ5qjLinN18BDfwh3+BbvRI4myvG1X9XRZvP2xUgu721AmkjmZP8YYPGfBQTnptj7MaT3gjyFLQSLxry7Cl3fe4W9BJN',
          scanSettings: new ScanSettings({ enabledSymbologies: ['ean13', 'upca', 'code128'] }),
          playSoundOnScan: true,
          vibrateOnScan: true,
        });

        // Escuchar eventos de escaneo
        barcodePicker.onScan(scanResult => {
          onScan(scanResult.barcodes[0].data);
        });

        // Almacenar el objeto BarcodePicker en una referencia para su posterior uso
        videoRef.current.barcodePicker = barcodePicker;
      }
    };

    initializeScanner();

    return () => {
      // Limpiar el objeto BarcodePicker cuando el componente se desmonte
      if (videoRef.current && videoRef.current.barcodePicker) {
        videoRef.current.barcodePicker.destroy();
      }
    };
  }, [onScan]);

  return <div ref={videoRef} style={{ width: '100%', height: '400px' }} />;
};

export default Scanner;

