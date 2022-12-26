let dotEnv = require("dotenv");
/**
 * @type {string}
 */
let dbUrl = dotEnv.config(process.env.ATLAS_CLUSTER);
module.exports = {
    dbUrl: dbUrl
};