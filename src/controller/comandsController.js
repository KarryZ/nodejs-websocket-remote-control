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
    console.log("current pos", x, y);   
    robot.moveMouse(x, y - firstParam);
    console.log("new pos", x, y - firstParam);
    return `mouse_up ${firstParam}`;
}