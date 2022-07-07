import robot from 'robotjs';
import { updateMousePosition } from './updateMousePosition.js';

export const putMouseDown = (firstParam) => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x, y + firstParam);
    return `mouse_down ${firstParam}`;
}