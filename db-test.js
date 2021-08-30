const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

async function setup() {
  try {
    const db = await openDb();
    await db.migrate({
      migrationsPath: "./migrations", //add cutom path to your migrations
      force: "last",
    });

    const people = await db.all("SELECT * FROM Person");
    console.log("All People", JSON.stringify(people, null, 2));

    const vehicles = await db.all("SELECT * FROM Vehicle");
    console.log("All People", JSON.stringify(vehicles, null, 2));
  } catch (error) {
    console.log(error);
  }
}

setup();
