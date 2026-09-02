// Question No. 1
function describeValue(value) {
    const valueType = typeof value;
    const result = value ? "truthy" : "falsy"
    return `"${valueType} | ${result}"`;
}