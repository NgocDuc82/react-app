import { v4 as uuidv4 } from 'uuid';
import slider2 from "../Assets/imgs/slider2.png";
import slider3 from '../Assets/imgs/slider3.png'

export const content = [
    {
        id : uuidv4() ,
        content_title : 'Branding & Design system',
        content_img : slider2,
        content_description : 'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups',
    },
    {
        id : uuidv4() ,
        content_title : 'Custome & Plugin Development',
        content_img : slider3,
        content_description : 'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups',
    }
]