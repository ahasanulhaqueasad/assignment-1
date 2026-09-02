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


// Question No. 3
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    else if (username.includes(" ")) {
        return "No Space Allowed";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word"
    }
    else {
        return "Available"
    }
}


// Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;
    if (distance > 2) {
        const extraDistance = distance - 2;
        // console.log(extraDistance)
        const distanceCharge = extraDistance * 15;
        // console.log(distanceCharge)
        fare = fare + distanceCharge;
    }
    const waitingCharge = waitingMinutes * 2
    fare = fare + waitingCharge;
    if (isNight) {
        fare = fare + (fare * 20 / 100)
    }
    return fare;
}


// Question No. 5
function getChaseVerdict(target, scored, ballsLeft) {
    const runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won"
    }
    if (ballsLeft <= 0) {
        return "Lost"
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
}
