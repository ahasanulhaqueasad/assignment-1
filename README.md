# Foundation Program Assignment 1

This repository contains my solutions for **Foundation Program Assignment 1**.

## 📋 Assignment Overview

**Total Marks:** 60

| Question   | Topic                      |  Marks |
| ---------- | -------------------------- | -----: |
| Question 1 | Value Detective            |     10 |
| Question 2 | Bangladesh Weekend Machine |     10 |
| Question 3 | Username Gatekeeper        |     10 |
| Question 4 | Dhaka CNG Fare Meter       |     15 |
| Question 5 | Run Chase Commentator      |     15 |
| **Total**  |                            | **60** |

---

## 📁 Project Structure

```text
Foundation-Program-Assignment-1/
│
├── answer.js
└── README.md
```

---

## 🛠️ Technologies Used

* JavaScript
* Functions
* Arrow Functions
* `typeof`
* Truthy & Falsy
* `if / else`
* `switch case`
* String Methods
* Template Strings
* Operators
* Default Parameters

---

## 📝 Questions

### Question 1: Value Detective

The `describeValue` function identifies:

* The type of a value using `typeof`
* Whether the value is truthy or falsy

Example:

```javascript
describeValue("hello");
// "string | truthy"

describeValue(0);
// "number | falsy"

describeValue(null);
// "object | falsy"
```

---

### Question 2: Bangladesh Weekend Machine

The `getDayType` function determines whether a given day is:

* Weekend
* Working Day
* Invalid Day

This question is solved using **`switch case`**.

Example:

```javascript
getDayType("Friday");
// "Weekend"

getDayType("MONDAY");
// "Working Day"

getDayType("Bandarban");
// "Invalid Day"
```

The function also handles different letter cases using `toLowerCase()`.

---

### Question 3: Username Gatekeeper

The `validateUsername` function validates a username according to the following rules:

1. Username shorter than 4 characters → `Too Short`
2. Username contains a space → `No Space Allowed`
3. Username contains `admin` → `Reserved Word`
4. Otherwise → `Available`

Example:

```javascript
validateUsername("rahim123");
// "Available"

validateUsername("ab");
// "Too Short"

validateUsername("rahim islam");
// "No Space Allowed"

validateUsername("Admin_Rahim");
// "Reserved Word"
```

The rules are checked in the required order.

---

### Question 4: Dhaka CNG Fare Meter

The `getCngFare` function calculates the total CNG fare based on:

* Minimum fare of 50 taka
* Distance charge after 2 km
* Waiting charge
* 20% additional charge at night

Example:

```javascript
getCngFare(5);
// 95

getCngFare(5, false, 10);
// 115

getCngFare(5, true);
// 114

getCngFare(5, true, 10);
// 138
```

The function uses default parameters:

```javascript
isNight = false
waitingMinutes = 0
```

---

### Question 5: Run Chase Commentator

The `getChaseVerdict` arrow function calculates the required run rate for a cricket chase and returns a verdict.

Possible verdicts:

* `Comfortable`
* `Tough`
* `Almost Impossible`

It also handles already-won and already-lost situations.

Example:

```javascript
getChaseVerdict(100, 90, 12);
// "Need 10 runs in 12 balls | Comfortable"

getChaseVerdict(100, 80, 12);
// "Need 20 runs in 12 balls | Tough"

getChaseVerdict(100, 70, 12);
// "Need 30 runs in 12 balls | Almost Impossible"
```

---

## ▶️ How to Run

1. Clone or download this repository.
2. Open the project in VS Code.
3. Open `answer.js`.
4. Run the JavaScript file using Node.js or the browser console.

Example:

```bash
node answer.js
```

---

## 📌 Submission Requirements

* All five answers are written in a single file named `answer.js`.
* The repository is public.
* The assignment contains solutions for all five questions.
* The exact function names required by the assignment are used.
* Each function returns its required result.

---

## 👨‍💻 Author

**Ahasanul Haque**

Foundation Program Assignment 1
