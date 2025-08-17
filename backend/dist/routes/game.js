"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gameRouter = express_1.default.Router();
const outcomes_1 = __importDefault(require("../outcomes"));
const TOTAL_DROPS = 16;
const MULTIPLIERS = {
    0: 16,
    1: 9,
    2: 2,
    3: 1.4,
    4: 1.4,
    5: 1.2,
    6: 1.1,
    7: 1,
    8: 0.5,
    9: 1,
    10: 1.1,
    11: 1.2,
    12: 1.4,
    13: 1.4,
    14: 2,
    15: 9,
    16: 16
};
gameRouter.post("/drop", (req, res) => {
    let outcome = 0;
    const pattern = [];
    for (let i = 0; i < TOTAL_DROPS; i++) {
        if (Math.random() > 0.5) {
            pattern.push("R");
            outcome++;
        }
        else {
            pattern.push("L");
        }
    }
    const multiplier = MULTIPLIERS[outcome];
    const possiblieOutcomes = outcomes_1.default[outcome];
    res.send({
        point: possiblieOutcomes[Math.floor(Math.random() * possiblieOutcomes.length || 0)],
        multiplier,
        pattern
    });
});
exports.default = gameRouter;
