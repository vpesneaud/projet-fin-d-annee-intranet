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

export function addNewUser (token, gender, firstname, lastname, password, email, phone, birthdate, city, country, photo, service) {
  return axios({
    method: 'post',
    url: 'http://localhost:7000/api/collaborateurs',
    data: {
      gender: gender,
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
      phone: phone,
      birthdate: birthdate,
      city: city,
      country: country,
      photo: photo,
      service: service
    },
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export function getCoworker (token, id) {
  return axios({
    method: 'get',
    url: 'http://localhost:7000/api/collaborateurs/' + id,
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(response => response.data)
}

export function modifyUser (token, id, gender, firstname, lastname, password, email, phone, birthdate, city, country, photo, service) {
  return axios({
    method: 'put',
    url: 'http://localhost:7000/api/collaborateurs/' + id,
    data: {
      gender: gender,
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
      phone: phone,
      birthdate: birthdate,
      city: city,
      country: country,
      photo: photo,
      service: service
    },
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}