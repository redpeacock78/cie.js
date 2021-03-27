import * as lab from '../src/main';

describe('Test main function', (): void => {
    test('Test lab.dE76()', async (): Promise<void> => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE76(color_1, color_2).then((result): string => {
            return result;
        })).toBe('10.0000');
    })
    test('Test lab.dE94.textile()', async (): Promise<void> => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE94.textile(color_1, color_2).then((result): string => {
            return result;
        })).toBe('5.0000');
    })
    test('Test lab.dE94.graphicArts()', async (): Promise<void> => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE94.graphicArts(color_1, color_2).then((result): string => {
            return result;
        })).toBe('10.0000');
    })
    test('Test lab.dE00()', async (): Promise<void> => {
        const color_1 = { L: 50, a: 50, b: 0 };
        const color_2 = { L: 40, a: 50, b: 0 };
        expect(await lab.dE00(color_1, color_2).then((result): string => {
            return result;
        })).toBe('9.4706');
    })
})