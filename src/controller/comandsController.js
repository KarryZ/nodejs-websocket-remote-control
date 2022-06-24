import robot from 'robotjs';

let command,  firstParam, secondParam;



export const commandWithParams = (data) => {   
    [ command,  firstParam, secondParam ] = data.split(" ");   
    firstParam = +firstParam;
    secondParam = +secondParam;
    return secondParam ? `${command} ${firstParam},${commandY}` : `${command} ${firstParam}`; 
}

export const switchCommands =  () => {
    switch (command) {
        case "mouse_position":
            return getCurrentPositions();
        break;
        case "mouse_up":
            return putMouseUp();
        break;
        case "mouse_down":
            return putMouseDown();
        break;
        case "mouse_left":
            return putMouseLeft();
        break;
        case "mouse_right":
            return putMouseRight();
        break; 
        case "draw_circle":
            return drawCircle();
        break;
        default:
            break;
    }
}

export const getCurrentPositions = (bWithText) => {  
    const { x, y }  = robot.getMousePos();
    return `mouse_position ${x},${y}`;
}

export const putMouseUp = () => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x, y - firstParam);
    return `mouse_up ${firstParam}`;
}

export const putMouseDown = () => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x, y + firstParam);
    return `mouse_down ${firstParam}`;
}

export const putMouseLeft = () => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x - firstParam, y);
    return `mouse_left ${firstParam}`;
}
export const putMouseRight = () => {
    const { x, y }  = robot.getMousePos(); 
    updateMousePosition(x + firstParam, y);
    return `mouse_right ${firstParam}`;
}

export const updateMousePosition = (x, y) => {      
    robot.moveMouse(x, y);   
}

export const drawCircle = () => {
    
}

