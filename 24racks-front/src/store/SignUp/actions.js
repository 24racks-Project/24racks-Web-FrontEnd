const sendDataLogin = (setIsSignUpUser) => {
    return {
        type: "SEND_DATA_LOGIN",
        data: setIsSignUpUser
    }
};

const dataName = (name) => {
    return {
        type: "DATA_NAME",
        data: name
    }
};

const dataPassword = (password) => {
    return {
        type: "DATA_PASS",
        data: password
    }
};

export {sendDataLogin, dataName, dataPassword};