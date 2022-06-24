import robot from 'robotjs';

let command,  commandX, commandY;



export const commandWithParams = (data) => {
   
    [ command,  commandX, commandY  ] = data.split(" ");

   return `${command},${commandX},${commandY}`; 
}

export const switchCommands =  () => {
    switch (command) {
        case "mouse_position":
            return getCurrentPositions();
        break;
    
        default:
            break;
    }
}

export const getCurrentPositions = () => {  
    const { x, y }  = robot.getMousePos();
    return `mouse_position ${x},${y})`;
}