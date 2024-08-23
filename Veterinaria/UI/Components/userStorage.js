let users = [];

export const storeUser = (userData) => {
    const existingUser = users.find(
        user => user.userName === userData.userName
    );
    if (existingUser) {
        return false;
    }
    users.push(userData);
    return true;
};

export const getUser = (username) => {
    return users.find(user => user.userName === username) || null;
};

export const validateUser = (username, password) => {
    const user = getUser(username);
    if (user && user.password === password) {
        return true;
    }
    return false;
};
