import { promises as fs, existsSync } from 'fs';
import { createImage } from '../../routes/imagesRoute/images.controller';

describe('test images controller functions', () => {
  it('expects createImage function to create image in thumbs directory', async () => {
    // resize for already existed image in assets directory
    await createImage('test', 350, 300);
    expect(existsSync('./thumbs/test+350x300.jpg')).toBeTruthy()
    // deleting file
    await fs.unlink('./thumbs/test+350x300.jpg')
  })
})