import { v4 as uuidv4 } from 'uuid';
import inFo1 from "../Assets/imgs/info-1.png";
import inFo2 from "../Assets/imgs/info-2.png";
import inFo3 from "../Assets/imgs/info-3.png";
export const users = [
    {
        id : uuidv4() ,
        user_name : 'Andrew Rathore',
        user_urlAvatar: inFo1,
        user_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
        id : uuidv4() ,
        user_name : 'Andrew Rathore',
        user_urlAvatar: inFo2,
        user_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
        id : uuidv4() ,
        user_name : 'Andrew Rathore',
        user_urlAvatar: inFo3,
        user_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    }
]
