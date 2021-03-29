import { Command } from "commander";
const packageJson = require("../../package.json");

const command = new Command();
command
  .name("cie-js")
  .description(
    "Derives the color difference using the method defined by LAB Delta E (CIE76, CIE94, CIEDE2000)."
  )
  .command("dE76", "Use the CIE 1976 color difference formula.", {
    executableFile: `${__dirname}/cli-dE76.js`,
  })
  .command("dE94", "Use the CIE 1994 color difference formula.", {
    executableFile: `${__dirname}/cli-dE94.js`,
  })
  .command("dE00", "Use the CIEDE2000 color difference formula.", {
    executableFile: `${__dirname}/cli-dE00.js`,
  })
  .on("--help", (): void => {
    console.log("");
    console.log("TL;DR");
    console.log(
      "  $ cie-js dE76 50.0000 2.6772 \\ -79.7751 50.0000 0.0000 \\ -82.7485"
    );
    console.log(
      "  $ cie-js dE94 -g 50.0000 2.6772 \\ -79.7751 50.0000 0.0000 \\ -82.7485"
    );
    console.log(
      "  $ cie-js dE00 50.0000 2.6772 \\ -79.7751 50.0000 0.0000 \\ -82.7485"
    );
  })
  .version(
    `cie-js ${packageJson.version}
Copyright (C) 2021 redpeacock78
License MIT.
THIS IS FREE SOFTWARE.
YOU ARE FREE TO CHANGE AND REDISTRIBUTE IT.
THERE IS NO WARRANTY, TO THE EXTENT PERMITTED BY LAW.
Written by redpeacock78 <https://github.com/redpeacock78>.`,
    "-v, --version",
    "Output the version number"
  )
  .parse(process.argv);
