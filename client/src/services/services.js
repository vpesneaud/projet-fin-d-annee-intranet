import axios from "axios"

export function loginData (email, password) {
    return axios({
        method: 'post',
        url: 'http://localhost:7000/api/login',
        data: {
          email: email,
          password: password
        },
      })
}