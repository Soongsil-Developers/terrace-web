import { useState } from "react";
import { QrReader } from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Scanner() {
  const [logs, setLog] = useState<Array<string>>([]);
  const [data, setData] = useState<string>("");

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text]);
    }
  };

  return (
    <div className='app'>
      <div>
        <QrReader
          constraints={{ facingMode: "user" }}
          onResult={(result, error) => {
            if (result) {
              setData(result.getText);
            }
            if (!!error) {
              console.log(error);
            }
          }}
          containerStyle={{ width: "100%" }}
        />

        <BarcodeScannerComponent
          onUpdate={barcodeScannerComponentHandleUpdate}
        />
      </div>
      <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}
      </div>
    </div>
  );
}
