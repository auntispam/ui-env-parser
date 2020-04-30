import { Injectable } from '@nestjs/common';
const cheerio = require("cheerio");
const copy = require("recursive-copy");
const fs = require("fs");
const rimraf = require("rimraf");


@Injectable()
export class WorkerService {
  constructor () {    
  }

  parse(): void {
    console.log("Starting ui-env-parser ..")
    const DIST_DIR = process.env.DIST_DIR;
    const WWW_DIR = process.env.WWW_DIR;
    const VUE_APP_MY_VAR1 = process.env.VUE_APP_MY_VAR1;
    const VUE_APP_MY_VAR2 = process.env.VUE_APP_MY_VAR2;    
    const BASE_URL = process.env.BASE_URL;

    rimraf(WWW_DIR + "/*", {}, function() {
      console.log("deleting all files & folders under: " + WWW_DIR);   
      copy(`${DIST_DIR}`, `${WWW_DIR}`, { debug: false }, function(error, results) {
        if (error) {
          console.error("Copy failed at " + DIST_DIR + " to " + WWW_DIR + " : " + error);
        } else {
          console.info("Copied " + results.length + " files");
          console.log("ENV Variables substitution in index.html")


          const file = `${WWW_DIR}/index.html`;
          const values = {
            VUE_APP_MY_VAR1: VUE_APP_MY_VAR1,
            VUE_APP_MY_VAR2: VUE_APP_MY_VAR2,
            BASE_URL: BASE_URL,
          };
          console.log(`Values: ${JSON.stringify(values)}`);

          console.info(`Reading '${file}'`);
          fs.readFile(file, "utf8", function(error, data) {
            if (!error) {
              const $ = cheerio.load(data);
              console.info(`Rewriting values '${values}'`);
              for (let [key, value] of Object.entries(values)) {
                console.log(key, value);
                $(`[property=${key}]`).attr("content", value);
              }
              console.log(`Writing file: ${file}`)
              console.log("New Value: " + $.html());
              fs.writeFile(file, $.html(), function(error) {
                if (!error) {
                  console.info(`Wrote '${file}'`);
                } else {
                  console.error(error);
                }
              });
            } else {
              console.error("Cannot read file: " + file + " Error: " + error);
            }
          });
        }
      }); 
    });    
  }  
}