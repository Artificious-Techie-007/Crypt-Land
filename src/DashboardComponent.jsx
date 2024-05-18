import LogoComponent from "./Logos.jsx"
import Graph from "./cryptassessts/graph.svg";
import profitcandle from "./cryptassessts/profitcandle.svg";
import revenuecandle from "./cryptassessts/revenuecandle.svg";
import productcandle from "./cryptassessts/productcandle.svg";

function DashBoardComponet(){
    return(
        <>
            <div class="dashboard">
            
                <div class="stats-section">
                    <div class="stat">
                        <h3>Total Profit</h3>
                        <p>$350,240</p>
                            <div className="profitbar">
                                <LogoComponent logo={profitcandle} text={'+18.23'}/>
                            </div>
                    </div>
                    <div class="stat1">
                        <h3>Total Revenue</h3>
                        <p>$400,690</p>
                            <div className="revenuecandle">
                                <LogoComponent logo={revenuecandle} text={'+28.5'}/>
                            </div>
                    </div>
                    <div class="stat2">
                        <h3>Product Sold</h3>
                        <p>$200,000</p>
                            <div className="productcandle">
                            <LogoComponent logo={productcandle} text={'+28.35'}/>
                            </div>
    
                    </div>
             </div>
                    <div class="overview-section">
                        <div className="graphsection">
                            <LogoComponent logo={Graph} text={''}/>        
                        </div>
                    </div>
    
                    </div>
                <div class="balance-section">
                    <h3>Total Balance</h3>
                    <p>$350,000</p>
                    <a href="#" className ="Transferbtn">Transfer</a>
                    <h3>Total Income</h3>
                    <p>$320,000</p>
                    <h3>Total Expense</h3>
                    <p>$220,000</p>
                </div>
                <div class="employee-section">
                    <h3>Employee</h3>
                    
                    <ul>
                    <li>Independent Contractor</li>
                    <li>Contracted Employee</li>
                    <li>Stakeholders</li>
                    </ul>
                </div>
            
            


        </>

    );
}

export default DashBoardComponet;