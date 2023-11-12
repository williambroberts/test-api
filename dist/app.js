"use strict";
const express = require("express");
function createApp__app() {
    const app = express();
    app.get("/", (req, res) => {
        res.json({ success: true });
    });
    return app;
}
module.exports = createApp__app;
