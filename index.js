// Code your solution here
function findMatching(array, str) {
    let driverNames = array.filter(name => name.toLowerCase() === str.toLowerCase())
    return driverNames
}

function fuzzyMatch(array, str) {
    return array.filter(array => array.startsWith(str))
}


function matchName(array, str) {
    return array.filter(array => array.name === str);
}