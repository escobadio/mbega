

import {serve} from 'bun';


import index from './assets/html/index.html';
//import embedImage from './assets/img/bun.png' with { type: 'file' };


const MAX_AGE = 31536000;

//const bytesImage = await Bun.file(embedImage).bytes();


const server = serve({
	routes: {
		
		'/*': index,
		
		'/api/hello': {
			GET: () => Response.json({
				message: 'Hello from API'
			})
		},
		
		/*
		'/bun.png': new Response(bytesImage, {
			headers: {
				'Content-Type': 'image/png',
				'Cache-Control': `public, max-age=${MAX_AGE}`,
			},
		}),
		*/
		
	},
});


console.log(`Server running at http://localhost:${server.port}`);

