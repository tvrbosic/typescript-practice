"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    // Read the file and convert it to a string.
    // Split the data into rows.
    // Split the row into an array of strings.
    // Convert the strings into the appropriate type.
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, 'utf8')
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // Type assertion
                row[5],
                row[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
