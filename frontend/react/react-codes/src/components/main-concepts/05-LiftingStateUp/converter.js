import { SCALE } from "./scale";


function CtoF(temperature) {
  return (temperature * (9/5)) + 32;
}

function FtoC(temperature) {
  return (temperature - 32) * (5/9);
}

export const convert = (temperature, scale) => {
  return (SCALE.celsius === scale)
    ? FtoC(temperature)
    : CtoF(temperature);
}
