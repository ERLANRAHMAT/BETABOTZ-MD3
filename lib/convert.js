const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const { spawn } = require('child_process');
const sharp = require('sharp');
const { tmpdir } = require('os');

function imageToWebp(bufferImage) {
    return new Promise(async (resolve, reject) => {
        try {
            const tempFile = path.join(tmpdir(), `${Math.random().toString(36).substring(7)}.webp`);
            const outputFile = tempFile;
            
            await sharp(bufferImage)
                .toFormat('webp')
                .toFile(outputFile);
            
            const webpBuffer = fs.readFileSync(outputFile);
            fs.unlinkSync(outputFile);
            resolve(webpBuffer);
        } catch (error) {
            reject(error);
        }
    });
}

function videoToWebp(bufferVideo) {
    return new Promise((resolve, reject) => {
        const tempFile = path.join(tmpdir(), `${Math.random().toString(36).substring(7)}`);
        const inputPath = `${tempFile}.mp4`;
        const outputPath = `${tempFile}.webp`;
        
        try {
            fs.writeFileSync(inputPath, bufferVideo);
            
            ffmpeg(inputPath)
                .inputOptions(['-t', '20'])  // Maksimal 20 detik
                .complexFilter([
                    'scale=512:512:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000'
                ])
                .outputOptions([
                    '-vcodec', 'libwebp',
                    '-vf', 'fps=10',
                    '-lossless', '1',
                    '-loop', '0',
                    '-preset', 'default',
                    '-an',
                    '-vsync', '0'
                ])
                .toFormat('webp')
                .save(outputPath)
                .on('end', () => {
                    const webpBuffer = fs.readFileSync(outputPath);
                    fs.unlinkSync(inputPath);
                    fs.unlinkSync(outputPath);
                    resolve(webpBuffer);
                })
                .on('error', (err) => {
                    fs.unlinkSync(inputPath);
                    reject(err);
                });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    imageToWebp,
    videoToWebp
};