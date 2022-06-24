import robot from 'robotjs';
import { updateMousePosition } from './updateMousePosition.js';

export const putMouseLeft = (firstParam) => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x - firstParam, y);
    return `mouse_left ${firstParam}`;
}