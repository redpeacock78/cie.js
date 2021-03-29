import * as lab from "../main";
import { Command } from "commander";
import { color } from "../../@types/main";

const command = new Command();
command
  .name("cie-js dE94")
  .description("Use the CIE 1994 color difference formula.")
  .option(
    "-g, --grafic <colors...>",
    "Weighting Factor (kl=1,k1=0.045,k2=0.015)"
  )
  .option(
    "-t, --textile <colors...>",
    "Weighting Factor (kl=2,k1=0.048,k2=0,014)"
  )
  .parse(process.argv);

const options = command.opts();
(async (): Promise<void> => {
  if (options.grafic) {
    if (options.grafic.length === 6) {
      const color_1: color = {
        L: options.grafic[0],
        a: options.grafic[1],
        b: options.grafic[2],
      };
      const color_2: color = {
        L: options.grafic[3],
        a: options.grafic[4],
        b: options.grafic[5],
      };
      await lab.dE94
        .graphicArts(color_1, color_2)
        .then((result): void => {
          console.log(result);
        })
        .catch((): void => {
          process.on("exit", (): void => {
            console.error("cie-js: Sorry. An error has occurred :_(");
            console.error(
              "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
            );
            process.exit(1);
          });
        });
    } else {
      process.on("exit", (): void => {
        console.error("cie-js: Sorry. An error has occurred :_(");
        console.error(
          "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
        );
        process.exit(1);
      });
    }
  } else if (options.textile) {
    if (options.textile.length === 6) {
      const color_1: color = {
        L: options.textile[0],
        a: options.textile[1],
        b: options.textile[2],
      };
      const color_2: color = {
        L: options.textile[3],
        a: options.textile[4],
        b: options.textile[5],
      };
      await lab.dE94
        .textile(color_1, color_2)
        .then((result: string): void => {
          console.log(result);
        })
        .catch((): void => {
          process.on("exit", (): void => {
            console.error("cie-js: Sorry. An error has occurred :_(");
            console.error(
              "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
            );
            process.exit(1);
          });
        });
    } else {
      process.on("exit", (): void => {
        console.error("cie-js: Sorry. An error has occurred :_(");
        console.error(
          "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
        );
        process.exit(1);
      });
    }
  } else if (!options.grafic && !options.textile) {
    process.on("exit", (): void => {
      console.error("cie-js: Sorry. An error has occurred :_(");
      console.error(
        "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
      );
      process.exit(1);
    });
  }
})();
