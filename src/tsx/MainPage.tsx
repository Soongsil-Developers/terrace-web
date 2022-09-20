import ReserveModal from "./Modal";
import "../css/main.css";
import ScannerModal from "./ScannerModal";
import Timer from "./Timer";
import Navigation from "./Navigation";
export default function MainPage() {
  return (
    <>
      <Navigation />
      <div>
        <Timer />
      </div>
      <div id="mainReserveBtn">
        <span id="floor">2F</span>
        <div id="floorRoom">
          <ReserveModal roomNumber="1" />
          <ReserveModal roomNumber="2" />
          <ReserveModal roomNumber="3" />
        </div>
        <hr id="dividingLine" />
        <span id="floor">3F</span>
        <div id="floorRoom">
          <ReserveModal roomNumber="4" />
          <ReserveModal roomNumber="5" />
          <ReserveModal roomNumber="6" />
        </div>
        <hr id="dividingLine" />
        <span id="floor">4F</span>
        <div id="floorRoom">
          <ReserveModal roomNumber="7" />
          <ReserveModal roomNumber="8" />
          <ReserveModal roomNumber="9" />
        </div>
        <hr id="dividingLine" />
        <span id="floor">5F</span>
        <div id="floorRoom">
          <ReserveModal roomNumber="10" />
          <ReserveModal roomNumber="11" />
          <ReserveModal roomNumber="12" />
        </div>
        <ScannerModal />
      </div>
    </>
  );
}
