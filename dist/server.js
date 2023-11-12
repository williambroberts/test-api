"use strict";
const createApp__server = require("./app");
//
const app = createApp__server();
app.listen(5000, () => {
    console.log("ok done");
});
