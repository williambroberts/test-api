"use strict";
const { createApp } = require("./app");
const app = createApp();
app.listen(5000, () => {
    console.log("ok done");
});
