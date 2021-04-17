import * as lab from "../main";
import { Command } from "commander";
import { color } from "../../@types/main";
import * as ab_end from "./utils/abnormal_end";
import * as serialize from "./utils/serialize";

const command = new Command();
command
  .name("cie-js dE76")
  .usage("[colors...]")
  .description("Use the CIE 1976 color difference formula.")
  .parse(process.argv);

(async (): Promise<void> => {
  let lines: string[][];
  if (process.argv.slice(2).length) {
    lines = [process.argv.slice(2)];
  } else if (!process.stdin.isTTY) {
    const buffers: Uint8Array[] = [];
    for await (const chunk of process.stdin) buffers.push(chunk);
    lines = Buffer.concat(buffers)
      .toString()
      .split(/\r?\n/)
      .filter(Boolean)
      .map((i: string): string[] => i.split(/,|\s|\t/));
  } else {
    ab_end();
  }
  await serialize(
    lines,
    async (args: string[]): Promise<void> => {
      if (args.length === 6) {
        const color_1: color = {
          L: (args[0] as unknown) as number,
          a: (args[1] as unknown) as number,
          b: (args[2] as unknown) as number,
        };
        const color_2: color = {
          L: (args[3] as unknown) as number,
          a: (args[4] as unknown) as number,
          b: (args[5] as unknown) as number,
        };
        await lab
          .dE76(color_1, color_2)
          .then((result: string): void => {
            console.log(result);
          })
          .catch((): void => {
            ab_end();
          });
      } else {
        ab_end();
      }
    }
  ).catch((): void => {
    ab_end();
  });
})();
