const sendDataPlan = () => {
    return {
        type: "SEND_DATA_PLAN",
        data: ""
    }
}

const postGame = (id_Game) => {
    return {
        type: "POST_DATA_GAME",
        data: id_Game
    }
};

const postPlan = (id_Plan) => {
    return {
        type: "POST_DATA_PLAN",
        data: id_Plan
    }
};

export {postGame, postPlan, sendDataPlan};