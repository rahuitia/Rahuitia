import request from 'superagent'

import {
  get
} from '../utils/localstorage'
import {
  isAuthenticated
} from '../utils/auth'

export function register (creds) {
  // the 'token' string is set at *1 in utils/auth.js
  const token = get('token')
  // telling the browser to expect and allow json data?
  const headers = { Accept: 'application/json' }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }
    
  return request
    .post('/api/auth/register')
    // put token in the header of req (like POSTMAN)
    .set(headers)
    // username and password (not hashed yet)
    .send(creds)
     // token returned at *2 in routes/auth.js
     // body object set at *3 in server/auth/token.js
    .then(res => res.body.token)
}

export function login(creds) {
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .post('/api/auth/login')
    .set(headers)
    .send(creds)
    .then(res => res.body.token)
    .catch(err => {
      throw err
    })
}
