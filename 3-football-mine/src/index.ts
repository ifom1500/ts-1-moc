import { MatchReader } from './MatchReader';
import { Summary } from './Summary';


/*
// Создать объект который имплементирует DataReader интерфейс
const csvFileReader = new CsvFileReader('football.csv');

// Создать объект MatchReader и передать DataReader имплементацию
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
*/

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport);
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport);
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
