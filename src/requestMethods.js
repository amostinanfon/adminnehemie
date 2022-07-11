import axios from 'axios';




const BASE_URL = "https://usdtapp.herokuapp.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWQ3MjhjM2U2NWQyODE4YmQ4MTcxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzAzNjcwMywiZXhwIjoyNTE3MDM2NzAzfQ._ejSoSdGtbG-TgT15WrUKJddhfrKQzjsvdcEz9S6H-A"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

export const publicRequest = axios.create({
    baseURL: BASE_URL
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})