var arg = process.argv.slice(2);

const axios = require('axios').default;
// const cheerio = require('cheerio');
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const URL_TO_PARSE = "https://codequiz.azurewebsites.net/";

axios.defaults.withCredentials = true

async function testGetResult() {
  await axios({
    method: 'get',
    url: URL_TO_PARSE,
    headers: {
      Cookie: 'hasCookie=true',
      Referer: 'https://codequiz.azurewebsites.net/',
      Connection:'keep-alive'
    }
  })
    .then(function (response) {
      // const dom = new JSDOM(response.data);
      // console.log(dom.window.document.getElementsByTagName('table').textContent);

      // const $ = cheerio.load(response.data);
      // Print the text nodes of the <table> in the HTML
      // console.log($("table").text());
      // $.html();
      // $.root().html();
    });
}
testGetResult();

const vgmUrl= 'https://www.vgmusic.com/music/console/nintendo/nes';

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  console.log(dom.window.document.querySelector('title').textContent);
}).catch(err => {
  console.log(err);
});

//   request(URL_TO_PARSE, (err, response, body) => {
//     if (err) throw new Error("Something went wrong");
//     // Load the HTML into cheerio's DOM
//     const $ = cheerio.load(body);
//     // Print the text nodes of the <table> in the HTML
//     console.log($("table").text());
// });


switch (arg[0]) {
  case "FUNCODE":
    // console.log("10.0548");
    // console.log("9.9774");
    // console.log("11.247");
    // console.log("11.443");
    break;
  case "B-INCOMESSF":
    // console.log("10.0548");
    break;
  case "BM70SSF":
    // console.log("9.9774");
    break;
  case "BEQSSF":
    // console.log("11.247");
    break;
  case "B-FUTURESSF":
    // console.log("11.443");
    break;
}