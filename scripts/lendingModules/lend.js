
export default function lend(){

    let lend = `
    <div class="lending-container-borrow-title">
                    <h2>Add SQR to lending pool</h2>
                    <h3>Interest rate: 13.2% APR</h3>
                    <h3>Total Deposited: 13.245.000SQR</h3>
                    <p>While lending your SQR we will give you wrapped SQR (wSQR)
                    equal to the amount deposited. These tokens can only be sent to 
                    our the Smart Contract. Interest is updated every 30 minutes
                    and can be claimed on the repay page. Reclamation of liquidity
                    can be done after selected lending term</p>
                </div>

                
                <div class="lending-container-borrow-amount">
                    <h3>Amount</h3>
                    <input type="text" placeholder="e.g 1 000 000 SQR" />
                    <h3>Lending Term</h3>
                    <div class="liquidityTerm">
                        <button id="lend1M">30 Days</button>
                        <button id="lend3M">90 Days</button>
                        <button id="lend6M">180 Days</button>
                        <button id="lend12M">360 Days</button>
                    </div>
                </div>
                <div class="lending-container-borrow-collateral">
                    <div class="lending-container-borrow-credentials">
                        <h3>Verify Wallet Connection</h3>
                        <h4>Make sure to select Polygon Mainnet</h4>
                        <button id="verifyWalletButton2">Authorize Wallet</button>
                        <h3>Deposit SQR</h3>
                        <button id="lending-execute-button">Deposit</button>
                    </div>
                </div>`;
                return lend
    }