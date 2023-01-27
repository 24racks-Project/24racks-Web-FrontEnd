const sendNewPassword = () => {
    return {
        type: "SEND_NEW_PASSWORD",
        data: ""
    }
};

const currentPassword = (cPass) => {
    return {
        type: "GET_CURRENT_PASSWORD",
        data: cPass
    }
};

const newPassword = (nPass) => {
    return {
        type: "GET_NEW_PASSWORD",
        data: nPass
    }
};

export {sendNewPassword, currentPassword, newPassword};