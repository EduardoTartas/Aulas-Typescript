/*1) Gerenciamento de Usuários*/

import {v4 as uuid} from 'uuid';

interface User {
    id: string;
    name: string;
    role: Role;
}

enum Role{
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

const user: User = {
    id: uuid(),
    name: 'EDUARDO',
    role: Role.ADMIN
}

const user2:User = {
    id: uuid(),
    name: 'SANTOS',
    role: Role.USER  
}

const user3:User = {
    id: uuid(),
    name: 'TARTAS',
    role: Role.GUEST 
}

let userLists: User[] = [user, user2, user3];

function roleFilter(role: Role): void{
    let filteredUsers: User[] = userLists.filter(user => user.role === role);
    filteredUsers.forEach(user => console.log(`UserID: ${user.id}\nNome: ${user.name}\nRole: ${user.role}`));
}

roleFilter(Role.ADMIN);