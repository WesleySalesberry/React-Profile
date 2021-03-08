import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://profile-blog-api.herokuapp.com/api/v1/',
    headers:{
        'Content-Type': 'application/json'
    },
})

export const getProjects = async () => {
    try {
         const response = await api.get('/project')
        return response.data.data
    } catch (error) {
        console.log(`Get Project Error: ${error}`)
    }
}

export const getBlogs = async () => {
    try {
         const response = await api.get('/blog')
        return response.data.data
    } catch (error) {
        console.log(`Get Blog Error: ${error}`)
    }
}

// class API {
//   axiosInstance = null;

//   constructor() {
// 		/* 
//       🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
//       https://create-react-app.dev/docs/adding-custom-environment-variables/
//     */
//     const axiosInstance = axios.create({
//       baseURL: 'https://profile-blog-api.herokuapp.com/api/v1/',,
//       timeout: 30000,
//       headers: { 
//           'Content-Type': 'application/json'
//        },
//     });

//     this.axiosInstance = axiosInstance;
//   }

//   async getProjects(){
//     try {
//          const response = await api.get('/project')
//         return response.data.data
//     } catch (error) {
//         console.log(`Get Project Error: ${error}`)
//     }
// }
// }


// export default new API()