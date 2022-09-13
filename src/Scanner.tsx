import { useState } from "react";
import { QrReader } from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Scanner() {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState<Array<string>>([]);
  const qrReaderHandleScan = (data: any) => {
    if (data) {
      setLog([...logs, data]);
      setScan(false);
    }
  };

  const qrReaderHandleError = (error: any) => {
    setLog([...logs, error.message]);
  };

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  const previewStyle = {
    height: 500,
    width: 400,
  };
  return (
    <div className='app'>
      <div>
        <QrReader
          style={previewStyle}
          onScan={qrReaderHandleScan}
          onError={qrReaderHandleError}
        />
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
