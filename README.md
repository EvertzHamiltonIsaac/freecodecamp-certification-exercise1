# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project.
Instructions for building your project can be found at

https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## 🕒 Timestamp Microservice – Technical Overview

This project is an API that converts dates into two formats: **Unix timestamp** (milliseconds since 1970) and **UTC string** (human-readable GMT format). It was developed as part of FreeCodeCamp’s certification project.

---

### 📌 Endpoints

| Route        | Description                                       |
| ------------ | ------------------------------------------------- |
| `/api`       | Returns the current date in both formats          |
| `/api/:date` | Returns the provided date in Unix and UTC formats |
| `/api/abc`   | Returns an error if the date is invalid           |

---

### 📥 Accepted Parameters

The `date` parameter can take the following values:

| Type             | Example             | Description                                       |
| ---------------- | ------------------- | ------------------------------------------------- |
| ISO Date String  | `2025-11-01`        | Standard ISO format                               |
| Timestamp        | `1761978438109`     | Milliseconds since 1970                           |
| Long Date String | `December 25, 2015` | English format with spaces (URL-encoded as `%20`) |
| No Parameter     | `/api`              | Returns the current date                          |

---

### ⚙️ Parsing Logic

The input is interpreted using the following logic:

```js
const strDate = new Date(
  typeof date === 'undefined' ? Date.now() : +date ? +date : date
);
```
