interface serialize {
    (xs: string[][], fn: Function): Promise<string[]>
}

const serialize: serialize = async (xs: string[][], fn: Function): Promise<string[]> => {
    const ret: string[] = [];
    for (let i = 0; i < xs.length; i += 1) {
        ret.push(await fn(xs[i]));
    }
    return ret;
}

export = serialize;