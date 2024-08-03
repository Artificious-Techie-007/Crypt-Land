import PageTitle from "./PageTitle.jsx";
import Subheader from "./subheader.jsx";
import LogoComponent from "./Logos.jsx"
import CryptLandLogo from "./cryptassessts/CryptLogo.svg";
import "./styles.css";
import DashBoardComponet from "./DashboardComponent.jsx";
import PatnersLogo from "./patnerscomponents.jsx";
import DeliverablesComponent from "./deliveriescomponents.jsx";
import FounderComponent from "./founderComponents.jsx";

function HeroSectionComponent() {
  return (
    <>
    <div className="layout">
      <div className="HeroSectionComponentContainer">
        <div className="NavBarComponentContainer">
         <div className="Navbar1">
          <a href="#">About Us</a>
          <a href="#">Platform</a>
          <a href="#">Solution</a>
          <a href="#">Customer</a>
        </div>
          <div className="logosection">
              <LogoComponent logo={CryptLandLogo} text={'Crypt Land'}/>
          </div>
          <div className="Navbar2">
          <a href="#">Price</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
          <a href="#" className ="SignUp">Sign in</a>
          </div>
        </div>
      <PageTitle text={["The Finance Solutions", <br />
      , "For Your Business"]} />
        <Subheader text={["Empower your finance team. The one stop platform for all financial",<br/>,
        " management of small and medium-sized business."]} />
        <div class="demo-form">
      <form>
        <input type="email" id="email" placeholder="Enter your email address"/>
        <button type="submit">Book A Demo</button>
    </form>
</div>

      </div>
        <DashBoardComponet/>  
        <PatnersLogo/>
        <DeliverablesComponent/>
        <FounderComponent/>
        
    </div>
    </>
  );
}

export default HeroSectionComponent;
