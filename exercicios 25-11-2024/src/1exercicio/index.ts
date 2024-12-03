import * as userService from '../1exercicio/service/userService';
import { Role } from "../1exercicio/enums/role";

console.log("Lista de ADMINs:");
userService.roleFilter(Role.ADMIN);

console.log("\nLista de USERs:");
userService.roleFilter(Role.USER);

console.log("\nLista de GUESTs:");
userService.roleFilter(Role.GUEST);