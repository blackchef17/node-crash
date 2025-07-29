import fs from 'fs/promises';
import path from 'path';

// readFile() -- Callback
fs.readFile('./text.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// readFile() - async/await
const readFile = async () => {

    try {
         // Step 1: Get metadata of the file
    const stats = await fs.stat('./text.txt');
    console.log('File size:', stats.size, 'bytes');

    // Step 2: Get the extension name of the file
       const ext = path.extname(filePath);
       console.log('This is the extension name', ext)

        // step 3: Read the content of the file
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log("try");
        console.log(data)
    } catch (error) {
        console.log(error)  
    }
}

readFile();






const filePath = './dir1/dir2/dir3/text.txt';

//basename() returning the last portion of a path
console.log(path.basename(filePath));

// dirname() this is to get the directory
console.log(path.dirname(filePath));

// extname() this is to give you the extension name(.txt)
console.log(path.extname(filePath));

// parse() this is to pass the following above as an object
console.log(path.parse(filePath));

