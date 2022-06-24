import robot from 'robotjs';

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
        case "draw_square":
            return drawSquare();
        break; 
        case "draw_rectangle":
            return drawRectangle();
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

export const drawSquare = () => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(80);
    robot.mouseToggle("down");
    robot.setMouseDelay(80);
    robot.moveMouse(x + firstParam, y);
    robot.setMouseDelay(80);
    robot.moveMouse(x + firstParam, y + firstParam);
    robot.setMouseDelay(80);
    robot.moveMouse(x, y + firstParam);
    robot.setMouseDelay(80);
    robot.moveMouse(x, y);
    robot.setMouseDelay(80);
    robot.mouseToggle("up");
    return `draw_square ${firstParam}`;
}

export const drawCircle = () => {
    const { x : mousePosX, y : mousePosY} = robot.getMousePos();
    
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        robot.mouseToggle("down");
        const x = mousePosX + (firstParam * Math.cos(i)) - firstParam;
        const y = mousePosY + (firstParam * Math.sin(i));
        robot.dragMouse(x, y);
    };
    robot.mouseToggle("up");
    return `draw_circle ${firstParam}`;
}

export const drawRectangle = () => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(80);
    robot.mouseToggle("down");
    robot.setMouseDelay(80);
    robot.moveMouse(x + firstParam, y);
    robot.setMouseDelay(80);
    robot.moveMouse(x + firstParam, y + secondParam);
    robot.setMouseDelay(80);
    robot.moveMouse(x, y + secondParam);
    robot.setMouseDelay(80);
    robot.moveMouse(x, y);
    robot.setMouseDelay(80);
    robot.mouseToggle("up");
    return `draw_rectangle ${firstParam}, ${secondParam}`;
}