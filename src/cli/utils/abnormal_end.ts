interface ab_end {
    (err_object?: Object): void
}

const ab_end: ab_end = (err_object?: Object): void => {
    process.on("exit", (): void => {
        if (err_object.toString().indexOf('not found') != -1) {
            console.error(err_object.toString().replace('Error: ', ''));
            process.exit(1);
        } else {
            console.error("cie-js: Sorry. An error has occurred :_(");
            console.error("Refer 'cie-js -h' or 'cie-js --help' for how to use the command.")
            process.exit(1);
        }
    });
};

export = ab_end;