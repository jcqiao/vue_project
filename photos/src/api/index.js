import { myAxios } from "../utils/axios"
import store from "../store"

export function loginApi ({ username, password }) {
  // console.log(username,password)
  return myAxios.post('/login', { username, password })
}

export function getPhotos () {
  // console.log('get photos')
  return myAxios.get('/getPhotos', {
    params: {
      uid: store.state.uid
    }
  })
}

export function uploadFilesApi (files, { onUploadProgress }) {
  let formData = new FormData()
  formData.append('img', files)
  return myAxios.post("/uploadFiles", formData, {
    onUploadProgress,
    params:{uid: store.state.uid}
  })
}