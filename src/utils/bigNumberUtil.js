
import BigNumber from 'bignumber.js';
BigNumber.set({
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
});
class MathCalculator {
    constructor() {
        // do something
    }
    dealNum(val) {
        if ((val)) {
            return val ? (BigNumber(Number(val) * 100).toFixed(0, BigNumber.ROUND_DOWN) / 100).toLocaleString() : 0
        }
        return 0
    }
    add(a, b) {
        return new BigNumber(a).plus(new BigNumber(b)).toString();
    }

    subtract(a, b) {
        return new BigNumber(a).minus(new BigNumber(b)).toString();
    }

    multiply(a, b) {
        return new BigNumber(a).multipliedBy(new BigNumber(b)).toString();
    }

    divide(a, b) {
        return new BigNumber(a).dividedBy(new BigNumber(b)).toString();
    }

}
export function showNum(val,decimals){
    if(!decimals){
        decimals = 2
    }
    if(decimals < 3){

        return val ? parseFloat((BigNumber(val).multipliedBy(10**decimals).toFixed(0, BigNumber.ROUND_DOWN)) / 10**decimals).toLocaleString() : 0
    }
    if (val) {
        return val ? parseFloat((BigNumber(val).multipliedBy(10**decimals).toFixed(0, BigNumber.ROUND_DOWN)) / 10**decimals) : 0
    }

    return 0
}

export default MathCalculator;
