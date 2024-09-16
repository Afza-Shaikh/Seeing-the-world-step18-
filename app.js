"use strict";
let places = [` islamabad `, ` beijing `, ` sydney `, ` new york `, ` paris `];
//print your array in the original order
console.log(`original ` + places);
//print your array in alphabetical order without modifiying in the actrual list
console.log(`copy ` + [...places].sort());
//show that your array is still in its original order by printing it.
console.log(`original ` + places);
//print your array in reserve alphabetical order without changing the order of the original list
console.log(`copy ` + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log(`copy ` + [...places].sort().reverse());
//reverse the order of your list. print the array to show that its order has changed.
console.log(`copy ` + [...places].sort());
//reverse the order of your list again.print the list to show its back to its orignial order.
console.log(`copy ` + [...places].sort().reverse());
//sort your array.
console.log(`copy ` + [...places].sort().reverse());
