import * as path from "path";

interface bin_path {
  (): string;
}
interface from_root {
  (parts: string): string;
}
const bin_path: bin_path = (): string => {
  const from_root: from_root = (parts: string): string => {
    return path.join(
      path.resolve(__dirname, "../../libs/CIE.sh/libexec"),
      parts
    );
  };
  return from_root("lab");
};

export = bin_path;
