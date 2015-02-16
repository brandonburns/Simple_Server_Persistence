function get() {
  console.log("Request handler 'get' was called.");
}

function post() {
  console.log("Request handler 'post' was called.");
}

function put() {
  console.log("Request handler 'put' was called.");
}

function patch() {
  console.log("Request handler 'patch' was called.");
}

function deleteFile() {
  console.log("Request handler 'deleteFile' was called.");
}

exports.get = get;
exports.post = post;
exports.put = put;
exports.patch = patch;
exports.deleteFile = deleteFile;