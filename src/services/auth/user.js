import {users} from '../../mocks/user'
export const getUser = () => { 
    return new Promise((resolve, reject) =>{
       return resolve(users)
    })
}

 
