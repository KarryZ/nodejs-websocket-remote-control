import robot from 'robotjs';
import { updateMousePosition } from './updateMousePosition.js';

export const putMouseRight = (firstParam) => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x + firstParam, y);
    return `mouse_right ${firstParam}`;
}