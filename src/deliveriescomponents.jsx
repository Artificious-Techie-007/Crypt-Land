import LogoComponent from "./Logos";
import deliverable1 from "./cryptassessts/deliverable1.svg";
import deliverable2 from "./cryptassessts/deliverables2.svg";
import PageTitle from "./PageTitle.jsx";
import Subheader from "./subheader.jsx";

function DeliverablesComponent(){
    return(
        <>
            <div className="deliverables">
            <PageTitle text={["Boosting Business. Today",<br/>
                , "and Tomorrow"]}/>
                <div className="deliverable1">
                    <div className="header1">
                        <PageTitle text={["Optimise expense",<br/>
                        ," Management as a team"]}/>
                        <Subheader text={["Bring harmony to team expenses with budget limits and",<br/>
                        ," real-time monitiring,Freedom for your staff, Peace of mind",<br/>,
                        "for you."]}/>    
                        <a href="#" className ="Explore">Explore More</a>
                    </div>
                    <div className="logo">
                        <LogoComponent logo={deliverable1} text={''}/>
                    </div>
                </div>
                <div className="deliverable2">
                    <div className="header2">
                        <PageTitle text={["Real-time accounting",<br/>
                        ," at your fingertips."]}/>
                        <Subheader text={["Take the pain out of book keeping! Wave goodbye to",<br/>
                        ," mountains of paperwork and endless email reminders",<br/>,
                        "There`s now a new way of accounting."]}/>    
                        <a href="#" className ="Explore2">Explore More</a>
                    </div>
                    <div className="logo">
                        <LogoComponent logo={deliverable2} text={''}/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default DeliverablesComponent;