const lab = require('../src/main');

describe('Test error from main function', () => {
    test('Test lab.dE76()', async () => {
        const color_1 = { L: 50, a: 50, b: "test" };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE76(color_1, color_2).catch(() => {
            return "error";
        })).toBe("error");
    });
    test('Test lab.dE94.textile()', async () => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: "test" };
        expect(await lab.dE94.textile(color_1, color_2).catch(() => {
            return "error";
        })).toBe("error");
    });
    test('Test lab.dE94.graphicArts()', async () => {
        const color_1 = { L: "test", a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE94.graphicArts(color_1, color_2).catch(() => {
            return "error";
        })).toBe("error");
    });
    test('Test lab.dE00()', async () => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: "test", b: 0 };
        expect(await lab.dE00(color_1, color_2).catch(() => {
            return "error";
        })).toBe("error");
    });
});