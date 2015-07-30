var AWS = require("aws-sdk");

AWS.config.update({region: "ap-northeast-1"});
exports.handler = function(event, context) {
    console.log("Hello, world");
    context.done();
}
