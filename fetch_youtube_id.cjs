
const https = require('https');

const url = 'https://www.youtube.com/@VikarsAcademy';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        // Look for channelId in the metas using regex
        const match = data.match(/"(browseId|externalId|channelId)":"(UC[\w-]+)"/);
        if (match && match[2]) {
            console.log('FOUND_CHANNEL_ID:', match[2]);
        } else {
            console.log('CHANNEL_ID_NOT_FOUND');
        }
    });
}).on('error', (err) => {
    console.log('Error:', err.message);
});
