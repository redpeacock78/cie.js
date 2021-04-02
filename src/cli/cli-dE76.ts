import * as lab from "../main";
import { Command } from "commander";
import { color } from "../../@types/main";

const command = new Command();
command
  .name("cie-js dE76")
  .usage("<colors...>")
  .description("Use the CIE 1976 color difference formula.")
  .parse(process.argv);

const args: string[] = process.argv.slice(2);
(async (): Promise<void> => {
  if (args.length === 6) {
    try {
      const color_1: color = {
        L: Number(args[0]),
        a: Number(args[1]),
        b: Number(args[2]),
      };
      const color_2: color = {
        L: Number(args[3]),
        a: Number(args[4]),
        b: Number(args[5]),
      };
      await lab
        .dE76(color_1, color_2)
        .then((result: string): void => {
          console.log(result);
        })
        .catch((error: unknown): void => {
          const message: string = error
            .toString()
            .replace(/^Error: /, "")
            .replace(/^ .*\n/, "")
            .replace(/lab/g, "cie-js");
          process.on("exit", (): void => {
            console.error(message);
            process.exit(1);
          });
        });
    } catch {
      process.on("exit", (): void => {
        console.error("cie-js: Sorry. An error has occurred :_(");
        console.error(
          "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
        );
        process.exit(1);
      });
    }
  } else {
    process.on("exit", (): void => {
      console.error("cie-js: Sorry. An error has occurred :_(");
      console.error(
        "Refer 'cie-js -h' or 'cie-js --help' for how to use the command."
      );
      process.exit(1);
    });
  }
})();
