type CalcFunction = ({ a, b }: { a: number; b: number }) => number

const add: CalcFunction = ({ a, b }) => {
  return a + b
}

const sub: CalcFunction = ({ a, b }) => {
  return a - b
}

const mul: CalcFunction = ({ a, b }) => {
  return a * b
}

const div: CalcFunction = ({ a, b }) => {
  return a / b
}

export default {
  add,
  sub,
  mul,
  div,
}
