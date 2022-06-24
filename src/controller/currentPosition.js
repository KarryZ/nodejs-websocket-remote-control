import robot from 'robotjs';

export const getCurrentPositions = () => {  
    const { x, y }  = robot.getMousePos();
    return `mouse_position ${x},${y}`;
}