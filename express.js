const express = require('express');
const app = express();

const string = "very long string".repeat(65535);

app.get('/test', function (req, res) {
  res.json(string)
});

app.listen(3000);

/*
result:
Transactions:               20000 hits
Availability:              100.00 %
Elapsed time:              130.91 secs
Data transferred:        19999.73 MB
Response time:                0.03 secs
Transaction rate:          152.78 trans/sec
Throughput:              152.77 MB/sec
Concurrency:                5.12
Successful transactions:       20000
Failed transactions:               0
Longest transaction:            0.33
Shortest transaction:            0.00
*/
