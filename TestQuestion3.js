var arg = process.argv.slice(2);

const htmlparser2 = require("htmlparser2");
const axios = require('axios').default;
const cheerio = require('cheerio');
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const parse = require('html-dom-parser');

var DomParser = require('dom-parser');
var parser = new DomParser();

const URL_TO_PARSE = "https://codequiz.azurewebsites.net/";

axios.defaults.withCredentials = true

async function testGetResult() {
  await axios({
    method: 'get',
    url: URL_TO_PARSE,
    headers: {
      Cookie: 'hasCookie=true',
      Referer: 'https://codequiz.azurewebsites.net/',
      Connection: 'keep-alive'
    }
  })
    .then(function (response) {
      var dom = parse(response.data);
      var first   = dom[1].lastChild.lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
      var second  = dom[1].lastChild.lastChild.previousSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.data;
      var third   = dom[1].lastChild.lastChild.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.data;
      var forth   = dom[1].lastChild.lastChild.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.data;
      // console.log(first,second,third,forth);

      switch (arg[0]) {
        case "FUNDCODE":
          console.log(first);
          console.log(second);
          console.log(third);
          console.log(forth);
          break;
        case "B-INCOMESSF":
          console.log(first);
          break;
        case "BM70SSF":
          console.log(second);
          break;
        case "BEQSSF":
          console.log(third);
          break;
        case "B-FUTURESSF":
          console.log(forth);
          break;
      }
    });
}
testGetResult();
