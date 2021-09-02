const { expect } = require('chai');
const neatCsv = require('neat-csv');
const fs = require('fs');
const { generateData } = require('../app');


describe('test csv and json files', async () => {
  const csvData = await neatCsv(fs.readFileSync('./data.csv', 'utf8'));
  const jsonDATA = await generateData();

  it('*** Should have 25500 rows ***', () => {
    expect(csvData.length).to.equal(25500);
  });

  it('*** Should have 25131 rows ***', () => {
    expect(jsonDATA.length).to.equal(25131);
  });

  it('*** Should have a difference of 369 ***', () => {
    expect(csvData.length - jsonDATA.length).to.equal(369);
  });
});

