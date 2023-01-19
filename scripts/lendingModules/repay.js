export default function repay(){

    let repay = `
        <div class="lending-container-repay-title">
            <h2>SQR Repay</h2>
        </div>
        <div class="lending-container-repay-active-loans">
            <h3>Active loans</h3>
            <div>No active loans detected</div>
        </div>
        <div class="lending-container-repay-liquidity">
            <h3>Your liquidity</h3>
            <div>No assets in pool detected</div>
            <h3>Repay <input type="text" placeholder="e.g 1 000 000 SQR" /> <button id="lending-repay-button">Repay</button></h3>
        </div>`;
        return repay
}