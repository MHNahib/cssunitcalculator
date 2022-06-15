const px = document.getElementById("px");
const percents = document.getElementById("per");
const point = document.getElementById("point");
const em = document.getElementById("em");
const rem = document.getElementById("rem");

// calculations
const mainArray = ["px", "per", "point", "em", "rem"];

const baseCalculation = {
  // px to
  pxToPercents(value) {
    return value * 6.25;
  },

  pxToPoint(value) {
    return value * 0.75;
  },

  pxToEmAndRem(value) {
    return value * 0.0625;
  },

  //   percents to
  percentsToPx(value) {
    return value * 0.16;
  },

  percentsToPoint(value) {
    return value * 0.12;
  },

  percentsToEmAndRem(value) {
    return 0.01 * value;
  },

  // point to
  pointToPx(value) {
    return value * 1.33;
  },

  pointToPercents(value) {
    return value * 8.31;
  },

  pointToEmAndRem(value) {
    return value * 0.0831;
  },

  // emrem to
  emAndRemToPx(value) {
    return value * 16;
  },

  emAndRemToPercents(value) {
    return value * 100;
  },

  emAndRemToPoint(value) {
    return value * 12;
  },
};

const calculate = (unitId = "px", value = 0) => {
  if (unitId === "px") {
    percents.value = baseCalculation.pxToPercents(value);
    point.value = baseCalculation.pxToPoint(value);
    em.value = baseCalculation.pxToEmAndRem(value);
    rem.value = baseCalculation.pxToEmAndRem(value);
  } else if (unitId === "per") {
    px.value = baseCalculation.percentsToPx(value);
    point.value = baseCalculation.percentsToPoint(value);
    em.value = baseCalculation.percentsToEmAndRem(value);
    rem.value = baseCalculation.percentsToEmAndRem(value);
  } else if (unitId === "point") {
    px.value = baseCalculation.pointToPx(value);
    percents.value = baseCalculation.pointToPercents(value);
    em.value = baseCalculation.pointToEmAndRem(value);
    rem.value = baseCalculation.pointToEmAndRem(value);
  } else if (unitId === "em" || unitId === "rem") {
    px.value = baseCalculation.emAndRemToPx(value);
    percents.value = baseCalculation.emAndRemToPercents(value);
    point.value = baseCalculation.emAndRemToPoint(value);

    if (unitId === "em") rem.value = value;
    else em.value = value;
  }
};

// watch change
const updateValue = (e) => {
  const value = parseInt(e.target.value);
  const unitId = e.target.id;
  console.log(e);
  calculate(unitId, value);
};

px.addEventListener("input", updateValue);
percents.addEventListener("input", updateValue);
point.addEventListener("input", updateValue);
em.addEventListener("input", updateValue);
rem.addEventListener("input", updateValue);
