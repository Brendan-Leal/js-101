let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 402,
  Eddie: 10
};

if (ages.hasOwnProperty("Spot")) {
  console.log("Found Spot");
} else {
  console.log("Spot not found");
}
