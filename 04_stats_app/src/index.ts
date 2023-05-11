import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HtmlReport } from './reporters/HtmlReport';
import { DataProcessing } from './DataProcessing';

const matchReader = MatchReader.fromCsv('football.csv');
const dataProcessing = new DataProcessing(new WinsAnalysis('Man United'), new HtmlReport());

matchReader.load();
dataProcessing.process(matchReader.matches);
