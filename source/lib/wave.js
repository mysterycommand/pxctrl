const { PI: π, cos, sin } = Math;
const ππ = π * 2;

export const wave = (fn, min, max, period, offset = 0) => {
    return (ts) => {
        return ((max - min) / 2) * (1 + fn((ts + offset) * (ππ / period))) + min;
    };
};

export const sine = (min, max, period, offset = 0) => {
    return wave(sin, min, max, period, offset);
};

export const cosine = (min, max, period, offset = 0) => {
    return wave(cos, min, max, period, offset);
};
