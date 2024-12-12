import User from "./user.js";
import { printName, printAge } from "./user.js";

const user = new User("Bob", 45);

printName(user);
printAge(user);