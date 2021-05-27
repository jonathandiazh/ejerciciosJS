export const clean = (phoneNumber) => {
  if (/[a-zA-Z]/.test(phoneNumber)) {
    throw new Error("Letters not permitted");
  }
  if (/[,/#!$%^&*;:{}=_`~]/.test(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }
  let res = phoneNumber.match(/[0-9]/g);
  if (res.length > 11) {
    throw new Error("More than 11 digits");
  }
  if (res.length < 10) {
    throw new Error("Incorrect number of digits");
  }
  for (let i = 0; i < res.length; i++) {
    if (res.length === 11) {
      if (res[0] !== "1") {
        throw new Error("11 digits must start with 1");
      }
      if (res[1] === "0") {
        catchError(0, 'Area');
      }
      if (res[1] === "1") {
        catchError(1, 'Area');
      }
      if (res[4] === "0") {
        catchError(0, 'Exchange');
      }
      if (res[4] === "1") {
        catchError(1, 'Exchange');
      }
    } else {
      if (res[0] === "1") {
        catchError(1, 'Area');
      }
      if (res[0] === "0") {
        catchError(0, 'Area');
      }
      if (res[3] === "0") {
        catchError(0, 'Exchange');
      }
      if (res[3] === "1") {
        catchError(1, 'Exchange');
      }
    }
  }
  if (res.length === 11) {
    res.shift();

  }
  return res.join("");
};

const catchError = (n, areaOrEx) => {
  throw new Error(`${areaOrEx} code cannot start with ${n === 0 ? 'zero' : 'one'}`);
}