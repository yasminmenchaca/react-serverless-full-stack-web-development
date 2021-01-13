require("dotenv").config();
const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const getHighScores = async (filterEmptyRecords) => {
  const queryOptions = {
    sort: [{ field: "score", direction: "desc" }],
  };
  if (filterEmptyRecords) {
    queryOptions.filterByFormula = `AND(name != "", score > 0)`;
  }
  const records = await table.select(queryOptions).firstPage();
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return formattedRecords;
};

module.exports = { table, getHighScores };
