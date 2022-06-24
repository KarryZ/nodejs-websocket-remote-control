import Jimp from 'jimp';
import robot from 'robotjs';


export const printScreen = async () => {
    const { x, y } = robot.getMousePos();
    const capture = robot.screen.capture(x - 100, y - 100, 100 * 2, 100 * 2);
    const image = new Jimp(capture.width, capture.height);
      let pos = 0;
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        
        image.bitmap.data[idx + 2] = capture.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = capture.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = capture.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = capture.image.readUInt8(pos++);
        
      });
     
      const base64 = await image.getBase64Async(Jimp.MIME_PNG);
      const base64Image = base64.split(',')[1];
      
      return `prnt_scrn ${base64Image}`;

}