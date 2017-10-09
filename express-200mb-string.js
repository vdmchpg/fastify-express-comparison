const express = require('express');
const app = express();

const string = "very long string".repeat(65535 * 200);

app.get('/test', function (req, res) {
  res.json(string)
});

app.listen(3003);

/*result:
Transactions:		         200 hits
Availability:		      100.00 %
Elapsed time:		      237.30 secs
Data transferred:	    39999.39 MB
Response time:		       11.13 secs
Transaction rate:	        0.84 trans/sec
Throughput:		      168.56 MB/sec
Concurrency:		        9.38
Successful transactions:         200
Failed transactions:	           0
Longest transaction:	       24.47
Shortest transaction:	        1.06*/
