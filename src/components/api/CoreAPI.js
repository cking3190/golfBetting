import axios from 'axios'

const BASE_URL = "https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint"

export function postBet(owner, bet, members, hole, wager) {
    let data = {
            "betOwner" : owner,
            "bet" : bet,
            "members" : members,
            "hole": hole,
            "wager": wager,
            "active": true,
        }
    return axios({ method: 'post', url: `${BASE_URL}/postBet`, data: data})
}


export function postScore(id, username, score) {
    const data = {
        id : id,
        username : username,
        score: score
    }
    return axios({ method: 'post', url: `${BASE_URL}/postScore`, data: data})
}

export function getBetDetails(id) {
    return axios.get(`${BASE_URL}/get_bet_details?bet_id=${id}`)

}

export function postWinner(id, name, username) {
    const data = {
        id : id,
        winner : {name: name, username : username}
    }

    return axios({ method: 'post', url: `${BASE_URL}/postWinner`, data: data})
}

export function getPayouts() {
    return axios({method: 'get', url: `${BASE_URL}/getPayouts`})
}


export function undoWinner(id) {
    const data = {
        id : id
    }

    return axios({ method: 'post', url: `${BASE_URL}/undo_winner`, data: data})
}