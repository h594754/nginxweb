import Logos from "../Logos";
import Profil from "./images/meg.jpg";

export default function Forside() {
  return (
    <>
      <div>
        <div className="fremside">
          <h1>Hallo verden</h1>
          <img className="bilde" src={Profil} alt="profil" />
          <br />
          <br />
          <p>
            Mitt navn er Fredrik Enes og jeg studerer Dataingeniør ved Høgskulen
            på Vestlandet
          </p>

          <p> Ta gjerne kontakt via en av logoene under </p>
        </div>
        <Logos />
      </div>
    </>
  );
}
