import {content} from '../../mocks/content'
export const getContent = () => { 
    return new Promise((resolve, reject) =>{
       return resolve(content)
    })
}

 