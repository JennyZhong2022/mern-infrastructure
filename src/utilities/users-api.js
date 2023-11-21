import sendRequest from "./send-request"
const BASE_URL = '/api/users'


// export async function signUp(userData) {
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body:JSON.stringify(userData)
//   })
//   if (res.ok) {
//     return res.json()
//   } else {
//     throw Error('Invalid Sign Up');
//   }
// }

export async function signUp(userData) {
  return sendRequest(BASE_URL,'POST',userData)
}

// export async function login(userData) {
  
// }

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}