"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessing = void 0;
class DataProcessing {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    process(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.DataProcessing = DataProcessing;
