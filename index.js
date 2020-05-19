const fs = require("fs");

const newItems = [];
const set = new Set();
const names = new Set();

checkUserInputParameters();
init();

function init() {
  // read from bitwarden json
  const data = JSON.parse(fs.readFileSync(process.env.bitwardenInput));

  console.log(
    `There is ${data.items.length} Bitwarden items in file ${process.env.bitwardenInput} . Scanning for duplicates ...`
  );
  let dupCount = 0;

  // scan through bitwarden items
  for (const item of data.items) {
    const objWithoutId = { ...item };
    delete objWithoutId.id;
    const key = JSON.stringify(objWithoutId);
    if (set.has(key)) {
      // console.log(`Found duplicate ${item.name}`);
      dupCount++;
      continue;
    }
    if (names.has(item.name)) {
      console.log(
        `Possible duplicate for name ${item.name}. Please resolve using Bitwarden web vault ...`
      );
    }
    set.add(key);
    names.add(item.name);
    newItems.push(item);
  }

  // replace old items with new ones
  data.items = newItems;

  console.log(`Removed ${dupCount} duplicates`);
  console.log(
    `Saving new file ${process.env.bitwardenOutput} with ${data.items.length} Bitwarden items`
  );

  // save new json
  fs.writeFileSync(process.env.bitwardenOutput, JSON.stringify(data, null, 2));
}

function checkUserInputParameters() {
  if (!process.env.bitwardenInput) {
    console.error("Provide bitwardenInput. Ending program...");
    process.exit(0);
  }

  if (!process.env.bitwardenOutput) {
    console.error("Provide bitwardenOutput. Ending program...");
    process.exit(0);
  }
}
