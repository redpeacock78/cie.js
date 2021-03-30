const packageJson = require("../../package.json");

const err: (error: unknown) => Error = (error: unknown): Error => {
  const process: string = JSON.parse(
    error.toString().replace(/^Error: /, "")
  ).process.replace(/\n$/, "");
  const err: Error = new Error(process);
  err.stack += `\nPlease report issue from here: ${packageJson.bugs.url}`;
  return err;
};

export = err;
