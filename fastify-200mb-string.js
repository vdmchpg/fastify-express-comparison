const fastify = require('fastify')();

const string = "very long string".repeat(65535 * 200);

fastify.get('/test', function (request, reply) {
  reply.send(string)
});

fastify.listen(3002);

/*
<--- Last few GCs --->

[11891:0x22be620]    52589 ms: Mark-sweep 1407.8 (1462.0) -> 1407.8 (1466.5) MB, 6.7 / 0.0 ms  allocation failure GC in old space requested
[11891:0x22be620]    52628 ms: Mark-sweep 1407.8 (1466.5) -> 1407.7 (1468.5) MB, 38.2 / 0.0 ms  allocation failure GC in old space requested
[11891:0x22be620]    52645 ms: Mark-sweep 1407.7 (1468.5) -> 1407.7 (1451.5) MB, 17.1 / 0.0 ms  last resort
[11891:0x22be620]    52662 ms: Mark-sweep 1407.7 (1451.5) -> 1407.7 (1451.5) MB, 17.4 / 0.0 ms  last resort


<--- JS stacktrace --->

==== JS stack trace =========================================

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: node::Abort() [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 2: 0x136849c [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 3: v8::Utils::ReportOOMFailure(char const*, bool) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 4: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 5: v8::internal::Factory::NewRawOneByteString(int, v8::internal::PretenureFlag) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 6: v8::internal::String::SlowFlatten(v8::internal::Handle<v8::internal::ConsString>, v8::internal::PretenureFlag) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 7: v8::internal::String::Flatten(v8::internal::Handle<v8::internal::String>, v8::internal::PretenureFlag) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 8: v8::internal::String::ToNumber(v8::internal::Handle<v8::internal::String>) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
 9: v8::internal::Runtime_StringToNumber(int, v8::internal::Object**, v8::internal::Isolate*) [/home/vc/.nvm/versions/node/v8.2.1/bin/node]
10: 0xd75289040bd

Process finished with exit code 134 (interrupted by signal 6: SIGABRT)\
*/
