import LogoComponent from "./Logos";
import cambrian from "./cryptassessts/cambrian.svg";
import commvault from "./cryptassessts/commvault.svg";
import crompton from "./cryptassessts/compton.svg";
import selock from "./cryptassessts/selock.svg";
import software from "./cryptassessts/software.svg";
import aumni from "./cryptassessts/aunmi.svg";
import PageTitle from "./PageTitle.jsx";


function PatnersLogo(){
    return(
        <>
            <div className="patners-section ">
                <PageTitle text={["Working with world class partners.", <br />
                    , "We're partner first!"]} />
                    <div className="patnerslogo">
                        <LogoComponent logo={cambrian} text={''}/>
                        <LogoComponent logo={commvault} text={''}/>
                        <LogoComponent logo={crompton} text={''}/>
                        <LogoComponent logo={selock} text={''}/>
                        <LogoComponent logo={software} text={''}/>
                        <LogoComponent logo={aumni} text={''}/>
                    </div>
            </div>
            
        </>

    )
}

export default PatnersLogo;