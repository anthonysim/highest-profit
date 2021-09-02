# highest-profit

## Table of Contents

1. [Input-Needed](#Input-Needed)
2. [Output-Produced](#Output-Produced)
3. [Code-Algo-Design](#Code-Algo-Design)
4. [Testing](#Testing)
5. [Requirements](#Requirements)
6. [Usage](#Usage)

## Input-Needed

This script needs a csv file specifically name ```data.csv```. This file needs to contain columns specifying the:

 - Year
 - Rank
 - Company
 - Revenue (in millions)
 - Profit (in millions)

Here is a photo example of a csv file below to illustrate what was stated above.
 ![Screen Shot 2021-09-01 at 9 42 37 PM](https://user-images.githubusercontent.com/31682285/131783008-7b3b9051-37c9-4376-8b48-39fd5578cdb7.png)


## Output-Produced
- Total rows from the raw ```data.csv``` data.
- Total rows of data after removing all non-numeric profits.
- Top 20 rows with the highest profit values.
- JSON file named ```data2.json``` which is ordered by profit (largest to smallest) with all non-numeric profit data removed from the original raw ```data.csv``` file.

## Testing
The following tests were conducted using npm packages mocha and chai:
- Testing of ```data.csv``` file to ensure a total of 25500 rows.
- Testing of ```data2.json``` file to ensure a total of 25131 rows.
- Testing of difference ensure a total of 369 rows (non-numeric data).

Type ```npm run test``` to run tests.

## Code-Algo-Design
- The code that runs this script is in a file called ```app.js```.
- The npm package ```neat-csv``` is used to convert the ```data.csv``` file from csv to JSON.
- From there the JSON data is iterated, updating the keys of each object data to year, rank, company, revenue, and profit. All non-numeric objects are removed as well.
- Finally a new file named ```data2.json``` is created which reflects all objects in an array sorted by profits (largest to smallest) with all non-numeric data removed.

## Requirements
- Node

## Usage
1. Clone Gitub Repo
2. Install packages: ```npm install```
3. Run tests: ```npm run test```
4. Run script: ```bash run.sh```
