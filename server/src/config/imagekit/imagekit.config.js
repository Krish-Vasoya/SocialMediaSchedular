const ImageKit = require("imagekit");
const ENV = require("../environments/env");

const imageKit = ENV.IMAGEKIT_PUBLIC_KEY && ENV.IMAGEKIT_PRIVATE_KEY && ENV.IMAGEKIT_URL_END_POINT
    ? new ImageKit({
        publicKey: ENV.IMAGEKIT_PUBLIC_KEY,
        privateKey: ENV.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: ENV.IMAGEKIT_URL_END_POINT
    })
    : null;

module.exports = imageKit;