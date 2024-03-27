const { dbConfig } = require('../config');
const GoogleReviewsFetcher = require('./GoogleReviewsFetcher');
const DatabaseHandler = require('./DatabaseHandler');

async function scrapeGoogleReviews(url) {
    const fetcher = new GoogleReviewsFetcher(url);
    const reviews = await fetcher.fetchReviews();

    const dbHandler = new DatabaseHandler(dbConfig);
    await dbHandler.insertReviews(reviews);

    return reviews;
}

module.exports = { scrapeGoogleReviews };