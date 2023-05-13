const formatResult =  (result) =>{
    let str;
    if (result && result.output) {
        str = result.output.toHuman();
    }
    return str;
}
const dealSubAddr = (addr)=>{
    if(addr){
        return addr.substr(0,5) + "..." + addr.substr(addr.length-3,addr.length)
    }
    return ""
}
const dateFormat = (dateTime) => {
    const t = new Date(dateTime);
    const format = 'Y-m-d h:i:s';
    const year = t.getFullYear();
    const month = t.getMonth() + 1;
    const day = t.getDate();
    const hours = t.getHours();
    const minutes = t.getMinutes();
    const seconds = t.getSeconds();
    const hash = {
        'Y': year,
        'm': month>=10?month:`0${month}`,
        'd': day>=10?day:`0${day}`,
        'h': hours>=10?hours:`0${hours}`,
        'i': minutes>=10?minutes:`0${minutes}`,
        's': seconds>=10?seconds:`0${seconds}`
    };
    return format.replace(/\w/g, o => {
        return hash[o]
    })
}

const formatvoteDateTime = (dateTime,endTime) =>{
    dateTime = parseInt(dateTime.replace(/,/g, ""));
    endTime = parseInt(endTime.replace(/,/g, ""));

    return dateFormat(dateTime + endTime)
}
export function numToDecimal2(num){
    if(num<=0){
        return 0
    }
    if(num<0.001){
        return "< 0.01"
    }
    return parseInt(num*100)/100
}
export default{ formatResult, dateFormat, formatvoteDateTime,dealSubAddr }
