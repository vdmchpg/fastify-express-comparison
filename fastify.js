const fastify = require('fastify')();

const string = "very long string".repeat(65535);

fastify.get('/test', function (request, reply) {
  reply.send(string)
});

fastify.listen(3001);

/*
result:
Transactions:               20000 hits
Availability:              100.00 %
Elapsed time:              121.56 secs
Data transferred:        19999.73 MB
Response time:                0.03 secs
Transaction rate:          164.53 trans/sec
Throughput:              164.53 MB/sec
Concurrency:                5.28
Successful transactions:       20000
Failed transactions:               0
Longest transaction:            0.26
Shortest transaction:            0.00
*/
