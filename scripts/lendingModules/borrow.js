
export default function borrow(){

let borrow = `
<div class="lending-container-borrow-title">
                <h2>Borrow SQR</h2>
            </div>
            <div class="lending-container-borrow-amount">
                <h3>Amount</h3>
                <input type="text" placeholder="e.g 1 000 000 SQR" />
            </div>
            <div class="lending-container-borrow-collateral">
                <h3>Collateral (min 100%) </h3>
                    <input type="text" placeholder="e.g 100USDT" />
                    <h3> SQR available to borrow:</h3>
                    <h4> 12481294 SQL </h4>
                    <h4> Expected interest: 5% </h4>
                    <h3> Borrow term </h3>
                    <div class="liquidityTerm">
                        <button id="borrow1M" style="background-color: rgb(51, 74, 78);">30 Days</button>
                        <button id="borrow3M" style="background-color: rgb(51, 74, 78);">90 Days</button>
                        <button id="borrow6M" style="background-color: rgb(51, 74, 78);">180 Days</button>
                        <button id="borrow12" style="background-color: rgb(51, 74, 78);">360 Days</button>
                        
                    </div>
                <div class="lending-container-borrow-credentials">
                    <h3>Verify Wallet Connection</h3>
                    <button id="authorizeBtn">Authorize Wallet</button>
                    <h3>Execute Transaction</h3>
                    <button id="lending-execute-button">Execute</button>
                </div>
            </div>`;
            return borrow
}