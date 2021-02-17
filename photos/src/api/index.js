import { myAxios} from "../utils/axios"

export function loginApi ({ username, password }) {
  // console.log(username,password)
  return myAxios.post('/login', { username, password })
}

export function getPhotos () {
  // console.log('get photos')
  return myAxios.get('/getPhotos')
}

export function uploadFilesApi(files) {
  console.log('files', files)
  let formData = new FormData()
  formData.append('img', files)
  console.log('formdata',formData)
  return myAxios.post("/uploadFiles", formData)
}