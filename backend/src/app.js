"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_2 = require("express");
var app = (0, express_1.default)();
var router = (0, express_2.Router)();
app.use(express_1.default.json());
router.get('/', function (req, res) {
    res.json({ message: 'express sucess' });
});
app.use(router);
app.listen(3333, function () { return 'server is runnig'; });
