import axios from "axios"

export function loginData (email, password) {
    return axios({
        method: 'post',
        url: 'http://localhost:7000/api/login',
        data: {
          email: email,
          password: password
        },
      }).then(response => response.data)
}

export function randomUser (token) {
  return axios({
    method: 'get',
    url: 'http://localhost:7000/api/collaborateurs/random',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(response => response.data)
}

export function coworkers (token) {
  return axios({
    method: 'get',
    url: 'http://localhost:7000/api/collaborateurs',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(response => response.data)
}

export function addNewUser (token) {
  return axios({
    method: 'post',
    url: 'http://localhost:7000/api/collaborateurs',
    data: {
      email: email,
      password: password
    },
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}