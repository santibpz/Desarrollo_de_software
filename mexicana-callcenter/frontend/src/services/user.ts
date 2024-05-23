import axios from 'axios'

const baseUrl = 'https://10oti6hpbf.execute-api.us-east-1.amazonaws.com/dev'

const GetInfo = (userRole:string, username:string) => {
    const config = { // set headers
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
    }
    return axios //  axios request to backend
        .get(`${baseUrl}/${userRole}/myInfo/${username}`, config)
        .then(response => response.data) // return the user information
        
}

export default {
    GetInfo,
}