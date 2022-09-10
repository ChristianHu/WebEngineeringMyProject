// import axios from "axios";
import './styles/style.scss';
import { printMessage } from './scripts/test.ts';

// console.log("Hello npm project!");
// index.js
const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

for (let i = 0; i < 5; i++) {
  console.log(`hello ${user}, welcome to your npm project!`);
}

const username = undefined ?? 'Guest'; // nullish coalescing operator in ES2020
console.log(username);

printMessage(user);
printMessage(['susan', 'eric', 'john']);
