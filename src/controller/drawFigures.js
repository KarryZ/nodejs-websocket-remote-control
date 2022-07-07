import robot from 'robotjs';

export const drawSquare = (firstParam) => {
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

export const drawCircle = (firstParam) => {
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

export const drawRectangle = (firstParam, secondParam) => {
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