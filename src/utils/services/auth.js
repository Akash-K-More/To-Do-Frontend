export const getID = () => {
    return localStorage.getItem('userID');
};

export const setID = (id) => {
    localStorage.setItem('userID', id);
};

export const removeID = () => {
    localStorage.removeItem('userID');
};