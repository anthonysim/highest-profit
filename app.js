const neatCsv = require('neat-csv');
const fs = require('fs');


async function generateData() {
  let res = [];
  let count = 0;
  try {
    // PART 1: Total raw data count & total data count (minus non-numeric profit)/
    const content = fs.readFileSync('./data.csv', 'utf8');
    let data = await neatCsv(content);
    console.log(`Part 1: ${data.length} rows of data!`);

    for (let obj of data) {
      let hash = {
        year: obj.Year,
        rank: obj.Rank,
        company: obj.Company,
      }

      for (let key in obj) {
        if (key === 'Revenue (in millions)') {
          hash.revenue = obj[key];
        }
        if (key === 'Profit (in millions)' && isNaN(obj[key]) === false) {
          hash.profit = obj[key];
          res.push(hash);
        }
      }
    }
    console.log(`Part 1: ${res.length} rows of data after removing all "non-numeric profit!"`);
    res.sort((a, b) => parseFloat(b.profit) - parseFloat(a.profit));
    // PART 2: Save to new JSON file data2.json. Columns year, rank, company, revenue, and profit. Order the data based on the profit value. Print the top 20 rows with the highest profit values. This is your third printed answer.
    console.log('Part 2: Top 20 rows with the highest profit values');
    console.log(res.slice(0, 20));

    fs.writeFile('./data2.json', JSON.stringify(res), err => {
      if (err) throw err;
    })

  } catch (err) {
    console.error(err);
  }
}

generateData();

