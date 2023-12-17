export enum Permission {
    N = 0b0000, // none
    R = 0b1000, // read
    W = 0b0100, // write
    C = 0b0010, // create
    D = 0b0001, // delete
}

let curPermission: Permission = Permission.N;

export const hasPermission = (permission: Permission): boolean => {
    if (permission === Permission.N) return permission === curPermission;

    return (curPermission & permission) === permission;
};

export const addPermission = (permission: Permission) => {
    if (hasPermission(permission)) return;

    curPermission = curPermission | permission;
};

export const removePermission = (permission: Permission) => {
    if (!hasPermission(permission)) return;

    curPermission = curPermission ^ permission;
};

export const getCurrentPermission = () => curPermission;

export const clearPermission = () => curPermission = Permission.N;
