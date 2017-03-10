'use strict'

const {randomInt} = require('./math.js')
// console.log(randomInt)
const toDiceNotation = (side,count)=> {
  var diceNotation = `${side}d${count}`;
  return diceNotation
}
const roll = (diceNotation)=>{
  var side =diceNotation.split("d")[0];
  var count = diceNotation.split("d")[1];
  return randomInt(1,side);

}
module.exports ={toDiceNotation,roll}
