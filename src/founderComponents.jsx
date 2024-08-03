import LogoComponent from "./Logos";
import PageTitle from "./PageTitle.jsx";
import Subheader from "./subheader.jsx";
import ceo1 from "./cryptassessts/ceo1.svg"

function FounderComponent(){
    return(
        <>
        <div className="founderbox">
        <PageTitle text={["Modern Companies are", <br />,
         " built on Capital."]} />
        <Subheader text={["we provide software for the financial and operational needs of today`s ",<br/>,
        " founders so they can get back to doing what they do best-building"]} />

        <div className="ceo1container">
          <LogoComponent logo={ceo1} text={'Benjamin Franklin'}/>
        </div>
        </div>

        </>
    )
}

export default FounderComponent;
 