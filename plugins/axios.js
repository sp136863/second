import axios from 'axios'

function request_get(config) {
  const back = axios.create({
    baseURL: 'https://www.fastmock.site/mock/cb0c02d984bd8a854081726156ddaa9e/api',
    method: 'GET'
  })
  return back(config)
}

export function getNavData(id) {
  return request_get({
    url: '/swiper',
    params: {
      id
    }
  })
}


function request_post(config) {
  const back = axios.create({
    baseURL: 'https://www.fastmock.site/mock/cb0c02d984bd8a854081726156ddaa9e/api',
    method: 'POST'
  })
  return back(config)
}
export function login_check(username, password) {
  return request_post({
    url: '/login',
    params: {
      username,
      password
    }
  })
}




// const back = axios.create({
//   baseURL: 'https://www.fastmock.site/mock/cb0c02d984bd8a854081726156ddaa9e/api',
//   timeout: 5000
// })

// export default {
//   getNavData(id) {
//     return back.get('/swiper/' + id)
//   }
// }