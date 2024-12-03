"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
const user = {
    id: (0, uuid_1.v4)(),
    name: 'EDUARDO',
    role: Role.ADMIN
};
const user2 = {
    id: (0, uuid_1.v4)(),
    name: 'SANTOS',
    role: Role.USER
};
const user3 = {
    id: (0, uuid_1.v4)(),
    name: 'TARTAS',
    role: Role.GUEST
};
let userLists = [user, user2, user3];
function roleFilter(role) {
    let filteredUsers = userLists.filter(user => user.role === role);
    filteredUsers.forEach(user => console.log(user));
}
console.log(roleFilter(Role.ADMIN));
