import { User } from "../models/user";
import {v4 as uuid} from 'uuid';
import { Role } from "../enums/role";
 

const userLists: User[] = [
    { id: uuid(), name: 'EDUARDO', role: Role.ADMIN },
    { id: uuid(), name: 'SANTOS', role: Role.USER },
    { id: uuid(), name: 'TARTAS', role: Role.GUEST }
];

export function roleFilter(role: Role): void{
    let filteredUsers: User[] = userLists.filter(user => user.role === role);
    filteredUsers.forEach(user => console.log(`UserID: ${user.id}\nNome: ${user.name}\nRole: ${user.role}`));
}