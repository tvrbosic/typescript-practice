"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
// ############################## Inheritance approach ##############################
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    // Read the file and convert it to a string.
    // Split the data into rows.
    // Split the row into an array of strings.
    // Convert the strings into the appropriate type of data.
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, 'utf8')
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
