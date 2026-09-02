// Question No. 1
function describeValue(value) {
    const valueType = typeof value;
    const result = value ? "truthy" : "falsy"
    return `"${valueType} | ${result}"`;
}
// Question No. 2
function getDayType(day) {
    const newDay = day.toLowerCase().trim();

    if (
        newDay === "friday" ||
        newDay === "saturday"
    ) {
        return "Weekend";
    }
    else if (
        newDay === "sunday" ||
        newDay === "monday" ||
        newDay === "tuesday" ||
        newDay === "wednesday" ||
        newDay === "thursday"
    ) {
        return "Working Day"
    }
    else {
        return "Invalid Day";
    }
}
