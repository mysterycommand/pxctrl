export const { PI: π, sin, cos } = Math;
export const ππ = 2 * π;

/**
 * ## toDegrees
 * takes an angle in radians and returns that angle in degrees
 *
 * @param  {Number} radians an angle, in radians
 * @return {Number}         that same angle, in degrees
 */
export function toDegrees(radians) {
    return radians * 180 / π;
}

/**
 * ## toRadians
 * takes an angle in degrees and returns that angle in radians
 *
 * @param  {Number} degrees an angle, in degrees
 * @return {Number}         that same angle, in radians
 */
export function toRadians(degrees) {
    return degrees * π / 180;
}
