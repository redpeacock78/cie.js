import * as path from "path";

interface bin_path {
  (): string;
}
interface from_root {
  (parts: string): string;
}
const bin_path: bin_path = (): string => {
  const from_root: from_root = (parts: string): string => {
    return path.join(path.resolve(__dirname, "../../libs/bin"), parts);
  };
  return from_root("lab");
};

export = bin_path;
