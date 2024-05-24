// // For more information, see https://crawlee.dev/
// import { PlaywrightCrawler } from 'crawlee';

// // PlaywrightCrawler crawls the web using a headless
// // browser controlled by the Playwright library.
// const crawler = new PlaywrightCrawler({
//     // Use the requestHandler to process each of the crawled pages.
//     async requestHandler({ request, page, enqueueLinks, log, pushData }) {
//         const title = await page.title();
//         log.info(`Title of ${request.loadedUrl} is '${title}'`);

//         // Save results as JSON to ./storage/datasets/default
//         await pushData({ title, url: request.loadedUrl });

//         // Extract links from the current page
//         // and add them to the crawling queue.
//         await enqueueLinks();
//     },
//     // Comment this option to scrape the full website.
//     maxRequestsPerCrawl: 20,
//     // Uncomment this option to see the browser window.
//     // headless: false,
// });

// // Add first URL to the queue and start the crawl.
// await crawler.run(['https://crawlee.dev']);

// ------------------------------------------------------------------



// // Add import of CheerioCrawler
// import { RequestQueue, CheerioCrawler } from 'crawlee';

// const requestQueue = await RequestQueue.open();
// await requestQueue.addRequest({ url: 'https://crawlee.dev' });

// // Create the crawler and add the queue with our URL
// // and a request handler to process the page.
// const crawler = new CheerioCrawler({
//     requestQueue,
//     // The `$` argument is the Cheerio object
//     // which contains parsed HTML of the website.
//     async requestHandler({ $, request }) {
//         // Extract <title> text with Cheerio.
//         // See Cheerio documentation for API docs.
//         const title = $('title').text();
//         console.log(`The title of "${request.url}" is: ${title}.`);
//     }
// })

// // Start the crawler and wait for it to finish
// await crawler.run();


// ------------------------------------------------------------------


// // You don't need to import RequestQueue anymore
// import { CheerioCrawler } from 'crawlee';

// const crawler = new CheerioCrawler({
//     async requestHandler({ $, request }) {
//         const title = $('title').text();
//         console.log(`The title of "${request.url}" is: ${title}.`);
//     },
//         maxRequestsPerCrawl: 20,
//     });


// // Start the crawler with the provided URLs
// await crawler.run(['https://www.stacks.co/explore/get-stx']);


// ------------------------------------------------------------------


import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
    // Let's limit our crawls to make our
    // tests shorter and safer.
    maxRequestsPerCrawl: 20,
    // enqueueLinks is an argument of the requestHandler
    async requestHandler({ $, request, enqueueLinks }) {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);
        // The enqueueLinks function is context aware,
        // so it does not require any parameters.
        await enqueueLinks();
    },
});

await crawler.run(['https://www.stacks.co/explore/get-stx']);