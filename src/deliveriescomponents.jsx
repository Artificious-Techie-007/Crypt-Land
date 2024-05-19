import LogoComponent from "./Logos";
import PageTitle from "./PageTitle.jsx";
import Subheader from "./subheader.jsx";

function DeliverablesComponent(){
    return(
        <>
            <PageTitle text={["Boosting Business. Today",<br/>
                , "and Tomorrow"]}/>
            <div className="deliverables">
            <PageTitle text={"Optimise expense Management as a team"}/>
            <Subheader text={["Bring harmony to team expenses with budget limits and real-time monitiring.",<br/>
            ,"Freedom for your staff. Peace of mind for you."]}/>
            <a href="#" className ="Explore">Explore More</a>
            </div>
        </>
    );
}

export default DeliverablesComponent;