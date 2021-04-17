interface ab_end {
    (): void
}

const ab_end: ab_end = (): void => {
    process.on("exit", (): void => {
        console.error("cie-js: Sorry. An error has occurred :_(");
        console.error("Refer 'cie-js -h' or 'cie-js --help' for how to use the command.")
        process.exit(1);
    });
};

export = ab_end;