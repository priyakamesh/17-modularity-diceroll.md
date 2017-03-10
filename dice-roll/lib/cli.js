'use strict'

const {argv: [,,...args]} = process
const {sides,count} = require('./parse-args.js')(args)
const {toDiceNotation,roll}=require('./dice.js')
console.log(sides,count)
console.log(toDiceNotation(sides,count));
console.log(roll(toDiceNotation(sides,count)));
