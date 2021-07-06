"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()
// );
var summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary1.buildAndPrintReport(matchReader.matches);
