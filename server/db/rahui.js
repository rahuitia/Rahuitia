const connection = require("./connection");

//**************/write rahui function ()
function writeRahui(
  user_id,
  iwi,
  hapu,
  description,
  korero,
  geo_ref,
  date_placed,
  date_lifted,
  authoriser,
  contact,
  region,
  testDb
) {
  const db = testDb || connection;
  return db("rahui").insert({
    user_id: user_id,
    iwi: JSON.stringify(iwi),
    hapu: JSON.stringify(hapu),
    description: description,
    korero: korero,
    geo_ref: JSON.stringify(geo_ref),
    date_placed: date_placed,
    date_lifted: date_lifted,
    contact: contact,
    authoriser: authoriser,
    region: JSON.stringify(region)
  });
}

function editRahui(
  id,
  region,
  iwi,
  hapu,
  description,
  korero,
  geo_ref,
  date_placed,
  date_lifted,
  authoriser,
  contact,
  testDb
) {
  // console.log( "id:", id, "region:", region, "iwi:", iwi,"hapu:", hapu, "description:", description, "Korero:", korero, "geo_ref:", geo_ref, "date_placed:", date_placed,"date_lifted:", date_lifted,"authoriser:", authoriser,"contact:", contact)
  const db = testDb || connection;
  return db("rahui")
    .where({ id: id })
    .update({
      region: JSON.stringify(region),
      iwi: JSON.stringify(iwi),
      hapu: JSON.stringify(hapu),
      description: description,
      korero: korero,
      geo_ref: JSON.stringify(geo_ref),
      date_placed: date_placed,
      date_lifted: date_lifted,
      contact: contact,
      authoriser: authoriser,
    });
}

//**************/get rahui function ()
function getRahui(testDb) {
  const db = testDb || connection;
  return db("rahui").select();
}

function getRahuiInformation(testDb) {
  const db = testDb || connection;

  // console.log(db("rahui")
  // .join("users", "rahui.user_id", "=", "users.id")
  // .join("iwi", "rahui.user_id", "=", "iwi.user_id")
  // .join("hapu", "rahui.user_id", "=", "hapu.user_id")
  // .select("*", "rahui.id as rahui_id").toString())

  return db("rahui")
    .join("users", "rahui.user_id", "=", "users.id")
    .leftOuterJoin("iwi", "rahui.user_id", "=", "iwi.user_id")
    .leftOuterJoin("hapu", "rahui.user_id", "=", "hapu.user_id")
    .select("*", "rahui.id as rahui_id")
    .then(rahui =>
      rahui.map(r => {
        r.id = r.rahui_id;
        delete r.rahui_id;
        return r;
      })
    );
}

//**************/get rahui author function ()
function getRahuiAuthor(rahui_id, testDb) {
  const db = testDb || connection;

  return db("users")
    .join("rahui", "users.id", "=", "rahui.user_id")
    .where("rahui.id", "=", rahui_id)
    .select();
}

//**************/get rahui tautoko function ()
function getRahuiTautoko(rahui_id, testDb) {
  const db = testDb || connection;

  return db("users")
    .join("tautoko", "users.id", "=", "tautoko.user_id")
    .join("rahui", "rahui.id", "=", "tautoko.rahui_id")
    .where("tautoko.rahui_id", "=", rahui_id)
    .select();
}

function writeTautoko(obj, testDb) {
  const db = testDb || connection;
  return db("tautoko").insert(obj);
}

module.exports = {
  writeRahui,
  editRahui,
  getRahui,
  getRahuiInformation,
  getRahuiAuthor,
  getRahuiTautoko,
  writeTautoko
};
