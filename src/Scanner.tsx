import { useState } from "react";
import { QrReader } from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Scanner() {
  const [logs, setLog] = useState<Array<string>>([]);
  const qrReaderHandleScan = (data: string | null) => {
    if (data) {
      setLog([...logs, data]);
    }
  };

  const qrReaderHandleError = (error: any) => {
    setLog([...logs, error.message]);
  };

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text]);
    }
  };

  return (
    <div className='app'>
      <div>
        <QrReader constraints={{ facingMode: "rear" }} />
        <BarcodeScannerComponent
          onUpdate={barcodeScannerComponentHandleUpdate}
        />
      </div>
      {/* <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}
        <button onClick={() => setLog([])}></button>
      </div> */}
    </div>
  );
}
