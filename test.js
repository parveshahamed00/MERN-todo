var options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
var today = new Date();
today=today.toLocaleDateString("en-IN", options)
console.log(today);
