// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers.The function should be case insensitive.

function findMatching (array, nameString) {
    let matchingDrivers = array.filter(driverName => driverName.toLowerCase() ===nameString.toLowerCase())
    return matchingDrivers;
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch (driversArray, matchingLetters) {
    let matchingDrivers = driversArray.filter(driverName => driverName === matchingLetters); 
    return matchingDrivers;
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName (drivers, soughtName) {
    let matches = drivers.filter(nameProperty => nameProperty.name === soughtName);
    return matches
}