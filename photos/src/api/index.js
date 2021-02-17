import { myAxios} from "../utils/axios"

export function loginApi ({ username, password }) {
  // console.log(username,password)
  return myAxios.post('/login', { username, password })
}

export function getPhotos () {
  // console.log('get photos')
  return myAxios.get('/getPhotos')
}