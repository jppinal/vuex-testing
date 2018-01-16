import auth0 from 'auth0-js'

const _auth0 = new auth0.WebAuth({
  domain: process.env.API_DOMAIN,
  clientID: process.env.API_CLIENTID,
  redirectUri: 'http://localhost:8080/oauth/callback',
  audience: process.env.API_AUDIENCE,
  responseType: 'token id_token',
  scope: 'openid'
})

export default _auth0
