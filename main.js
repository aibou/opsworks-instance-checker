var event = {
    "Records": [
        {
            "awsRegion": "",
            "sequenceNumber": "196800000000000000000374",
            "partitionKey": "2efdb0ea22685b46993e42a67302a001",
            "eventSource": "aws:kinesis",
            "data": "SOME CUSTOM DATA 1"
        }
    ]
};

var context = {
    invokeid: 'invokeid',
    done: function(err, message) {
        return;
    }
};

var lambda = require("./opsworks-instance-checker");
lambda.handler(event,context);
