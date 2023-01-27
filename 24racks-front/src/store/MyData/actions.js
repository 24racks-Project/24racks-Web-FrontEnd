const getDataUser = (callback) => {
    return {
        type: "GET_DATA_USER",
        data: callback
    }
};

export {getDataUser};