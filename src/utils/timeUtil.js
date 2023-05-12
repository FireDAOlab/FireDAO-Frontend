import moment from "moment";
export function dealTime(time) {
    return moment(new Date(time*1000)).format("YYYY-MM-DD hh:mm")
}
