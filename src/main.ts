/*
Copyright (c) 2021 redpeacock78
This software is released under the MIT License, see LICENSE.
*/

import * as err from "./libs/error";
import * as bin_path from "./libs/bin";
import * as spawn from "spawn-promise";
import { _lab, color } from "../@types/main";

const bin: string = bin_path();
const lab: _lab = {
    dE76: async (color_1: color, color_2: color): Promise<string> => {
        const L1: number = color_1.L;
        const a1: number = color_1.a;
        const b1: number = color_1.b;
        const L2: number = color_2.L;
        const a2: number = color_2.a;
        const b2: number = color_2.b;
        const args: (string | number)[] = ["-dE76", L1, a1, b1, L2, a2, b2];
        return await spawn(bin, args).then((buffer: Buffer): string => {
            return buffer.toString().replace(/\n$/, '');
        }).catch((error: Object): never => {
            throw err(error);
        });
    },
    dE94: {
        textile: async (color_1: color, color_2: color): Promise<string> => {
            const L1: number = color_1.L;
            const a1: number = color_1.a;
            const b1: number = color_1.b;
            const L2: number = color_2.L;
            const a2: number = color_2.a;
            const b2: number = color_2.b;
            const args: (string | number)[] = ["-dE94", "-t", L1, a1, b1, L2, a2, b2];
            return await spawn(bin, args).then((buffer: Buffer): string => {
                return buffer.toString().replace(/\n$/, '');
            }).catch((error: Object): never => {
                throw err(error);
            });
        },
        graphicArts: async (color_1: color, color_2: color): Promise<string> => {
            const L1: number = color_1.L;
            const a1: number = color_1.a;
            const b1: number = color_1.b;
            const L2: number = color_2.L;
            const a2: number = color_2.a;
            const b2: number = color_2.b;
            const args: (string | number)[] = ["-dE94", "-g", L1, a1, b1, L2, a2, b2];
            return await spawn(bin, args).then((buffer: Buffer): string => {
                return buffer.toString().replace(/\n$/, '');
            }).catch((error: Object): never => {
                throw err(error);
            });
        }
    },
    dE00: async (color_1: color, color_2: color): Promise<string> => {
        const L1: number = color_1.L;
        const a1: number = color_1.a;
        const b1: number = color_1.b;
        const L2: number = color_2.L;
        const a2: number = color_2.a;
        const b2: number = color_2.b;
        const args: (string | number)[] = ["-dE00", L1, a1, b1, L2, a2, b2];
        return await spawn(bin, args).then((buffer: Buffer): string => {
            return buffer.toString().replace(/\n$/, '');
        }).catch((error: Object): never => {
            throw err(error);
        });
    }
};

export = lab;
