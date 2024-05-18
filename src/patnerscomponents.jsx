import LogoComponent from "./Logos";
import cambrian from "./cryptassessts/cambrian.svg";
import PageTitle from "./PageTitle.jsx";


function PatnersLogo(){
    return(
        <>
            <div className="patners-section ">
                <PageTitle text={["Working with world class partners.", <br />
                    , "We're partner first!"]} />
                    <div className="patnerslogo">
                        <LogoComponent logo={cambrian} text={''}/>
                    </div>
            </div>
            
        </>

    );
}

export default PatnersLogo;