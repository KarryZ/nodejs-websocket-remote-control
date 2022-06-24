import robot from 'robotjs';
import { getCurrentPositions } from './currentPosition.js';
import { drawSquare, drawCircle, drawRectangle } from './drawFigures.js';
import { putMouseDown } from './putMouseDown.js';
import { putMouseLeft } from './putMouseLeft.js';
import { putMouseRight } from './putMouseRight.js';
import { putMouseUp } from './putMouseUp.js';



let command,  firstParam, secondParam;

export const commandWithParams = (data) => {   
    [ command,  firstParam, secondParam ] = data.split(" ");   
    firstParam = +firstParam;
    secondParam = +secondParam;
    console.log(`command firstParam ${command} ${firstParam}`);
    return secondParam ? `${command} ${firstParam},${secondParam}` : `${command} ${firstParam}`; 
}

export const switchCommands =  () => {
    switch (command) {
        case "mouse_position":
            return getCurrentPositions();
        break;
        case "mouse_up":
            return putMouseUp(firstParam);
        break;
        case "mouse_down":
            return putMouseDown(firstParam);
        break;
        case "mouse_left":
            return putMouseLeft(firstParam);
        break;
        case "mouse_right":
            return putMouseRight(firstParam);
        break; 
        case "draw_circle":
            return drawCircle(firstParam);
        break; 
        case "draw_square":
            return drawSquare(firstParam);
        break; 
        case "draw_rectangle":
            return drawRectangle(firstParam, secondParam);
        break;
        default:
            break;
    }
}