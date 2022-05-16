import express from 'express';
import { promises as fs, existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';


async function  httpGetUpdatedImage  (req: express.Request, res: express.Response): Promise<express.Response|void> {
	const width: number = parseInt((req.query.width as unknown) as string);
	const length: number = parseInt((req.query.length as unknown) as string);
	const imageName: string = (req.query.filename as unknown) as string;
	// check if assets directory is not existed
	if (!existsSync('./assets')) {
		try {
			await fs.mkdir('assets');
		} catch (e) {
			const err = e as Error;
			console.log('Error: ', err.message);
		}
	}
	// check if file is not existed
	if (!existsSync(`./assets/${imageName}.jpg`)) {
		return res.status(404).send("Sorry, couln't find such a file in assests directory");
	}

	// if image existed in the directory then process it
	try {
		const newImage: string = await createImage(imageName, width, length);
		return res.status(200).sendFile(newImage);
	} catch (e) {
		return res.status(500).send(`Error : ${e}`);
	}
}

async function createImage  (imageName: string, width: number, length: number): Promise<string> {
	// checl if the directory not existed to create a new one
	if (!existsSync('./thumbs')) {
		try {
			await fs.mkdir('thumbs');
		} catch (e) {
			throw "Error: couldn't create thumbs directory";
		}
	}
	// check if the file alreay not existed
	if (!existsSync(`./thumbs/${imageName}+${width}x${length}.jpg`)) {
		// resize the image and save in the directory
		try {
			await sharp(`assets/${imageName}.jpg`)
				.resize(width, length)
				.toFile(`thumbs/${imageName}+${width}x${length}.jpg`);
		} catch (e) {
			console.log('heh');
			throw "Sorry, couldn't process your image";
		}
	}

	// if directory is existed and file is already existed then just send it the client
	return path.resolve(`thumbs/${imageName}+${width}x${length}.jpg`);
};

export { httpGetUpdatedImage, createImage }