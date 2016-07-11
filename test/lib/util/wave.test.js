import { assert } from 'chai';
import {
    getWavFn,
    getSinFn,
    getCosFn,
} from '../../../source/lib/util/wave';

/**
 * ## EPSILON
 * The Number.EPSILON property represents the difference between one and the
 * smallest value greater than one that can be represented as a Number.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 */
const { EPSILON: E } = Number;
const { sin, cos } = Math;
const meh = 1e-10; // ahh, JavaScript math

describe('lib/util/wave', function() {
    describe('#getWavFn', function() {
        it('can be used to return a sine function', function() {
            const provider = [{
                p: 500,
                min: 0,
                max: 2,
                offset: 100,
            },{
                p: 1500,
                min: 10,
                max: 200,
                offset: 333,
            },{
                p: 999999,
                min: 9999,
                max: 100000,
                offset: 7,
            },{
                p: 0.1,
                min: 0.2,
                max: 0.777,
                offset: 0.005,
            }];

            let sinFn;

            provider.forEach(function({p, min, max, offset}) {
                const amp = (max - min) / 2;

                sinFn = getWavFn(sin, p, min, max, offset);

                assert.closeTo(sinFn(0 - offset), min + amp, meh);
                assert.closeTo(sinFn(p * 1 / 4 - offset), max, meh);
                assert.closeTo(sinFn(p * 1 / 2 - offset), min + amp, meh);
                assert.closeTo(sinFn(p * 3 / 4 - offset), min, meh);
                assert.closeTo(sinFn(p - offset), min + amp, meh);
            });
        });

        it('can be used to return a cosine function', function() {
            const provider = [{
                p: 501,
                min: 0.5,
                max: 3,
                offset: 99,
            },{
                p: 1497,
                min: 11,
                max: 207,
                offset: 33,
            },{
                p: 99999,
                min: 999,
                max: 10000,
                offset: 77,
            },{
                p: 0.2,
                min: 0.4,
                max: 0.888,
                offset: 0.0125,
            }];

            let cosFn;

            provider.forEach(function({p, min, max, offset}) {
                const amp = (max - min) / 2;

                cosFn = getWavFn(cos, p, min, max, offset);

                assert.closeTo(cosFn(0 - offset), max, meh);
                assert.closeTo(cosFn(p * 1 / 4 - offset), min + amp, meh);
                assert.closeTo(cosFn(p * 1 / 2 - offset), min, meh);
                assert.closeTo(cosFn(p * 3 / 4 - offset), min + amp, meh);
                assert.closeTo(cosFn(p - offset), max, meh);
            });
        });
    });

    describe('#getSinFn', function() {
        it('should return a default sine function over a period of 1,000 ms', function() {
            const sinFn = getSinFn();

            assert.equal(sinFn(0), 0);
            assert.equal(sinFn(250), 1);
            assert.equal(sinFn(500), E);
            assert.equal(sinFn(750), -1);
            assert.equal(sinFn(1000), -E);
        });
    });

    describe('#getCosFn', function() {
        it('should return a default cosine function over a period of 1,000 ms', function() {
            const cosFn = getCosFn();

            assert.equal(cosFn(0), 1);
            assert.equal(cosFn(250), 0);
            assert.equal(cosFn(500), -1);
            assert.equal(cosFn(750), -E);
            assert.equal(cosFn(1000), 1);
        });
    });
});
