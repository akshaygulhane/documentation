
console.log('app starts..');

/**
 * This method converts the current time stamp into the formatted one.
 * Ex: Aug 06 2018 06:00:02
 * 
 * @returns {string} formatted date time stamp
 */
function getFormattedData() {
    let date = new Date();

    let strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return strArray[monthIndex] + ' ' + day + ' ' + year + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

}

/**
 * This method converts timestamp to UTC milliseconds
 * 
 * @param {string} stringTimestamp 
 * @returns {string} formatted date time stamp
 */
function getFormattedTime(stringTimestamp) {
    let isoTimestamp = new Date(stringTimestamp).toUTCString();
    // console.log("TIMESTAMP: ", isoTimestamp,Date.parse(isoTimestamp) )
    return (Date.parse(isoTimestamp) / 1000);
}

console.log("Current Timestamp Formatted: ", getFormattedData());

console.log("Current Time in milliseconds: ", getFormattedTime(new Date()));