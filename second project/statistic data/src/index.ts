import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./Analyzers/WinsAnalisis";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { HtmlReport } from "./ReportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()
// );
const summary1 = Summary.winsAnalysisWithHtmlReport("Man United");
summary1.buildAndPrintReport(matchReader.matches);
