import { assert } from 'chai';
import {
    π, ππ, sin, cos, saw,
    toDegrees,
    toRadians,
} from '../../../source/lib/util/math';

describe('lib/util/math', function() {
    describe('π', function() {
        it('should equal Math.PI', function() {
            assert.equal(π, Math.PI);
        });
    });

    describe('ππ', function() {
        it('should equal 2 * Math.PI', function() {
            assert.equal(ππ, 2 * Math.PI);
        });
    });

    describe('sin', function() {
        it('should equal Math.sin', function() {
            assert.equal(sin, Math.sin);
        });
    });

    describe('cos', function() {
        it('should equal Math.cos', function() {
            assert.equal(cos, Math.cos);
        });
    });

    describe('saw', function() {
        it('should produce a saw wave with values between -1 and 1 from 0 to 2π', function() {
            assert.equal(saw(0), -1);
            assert.equal(saw(π / 4), -0.75);
            assert.equal(saw(π / 2), -0.5);
            assert.equal(saw(π - π / 4), -0.25);
            assert.equal(saw(π), 0);
            assert.equal(saw(ππ - π / 4), 0.75);
            assert.equal(saw(ππ), -1);
            assert.equal(saw(ππ + π / 4), -0.75);
        });
    });

    describe('toDegrees', function() {
        it('should return degrees', function() {
            assert.equal(toDegrees(0), 0);
            assert.equal(toDegrees(π / 2), 90);
            assert.equal(toDegrees(π), 180);
            assert.equal(toDegrees(ππ), 360);
            assert.equal(toDegrees(ππ + π / 2), 450);
        });
    });

    describe('toRadians', function() {
        it('should return radians', function() {
            assert.equal(toRadians(0), 0);
            assert.equal(toRadians(90), π / 2);
            assert.equal(toRadians(180), π);
            assert.equal(toRadians(360), ππ);
            assert.equal(toRadians(450), ππ + π / 2);
        });
    });

});
