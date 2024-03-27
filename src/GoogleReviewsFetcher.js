const axios = require('axios)');
const cheerio = require('cheerio');

class GoogleReviewsFetcher {
    constructor(url) {
        this.url = url;
    }

    async fetchReviews() {
        try {
            const response = await axios.get(this.url);
            const $ = cheerio.load(response.data);

            const reviews = [];

            $('.review').each((index, element) => {
                const author = $(element).find('.author-name').text().trim();
                const rating = $(element).find('.review-score-container').text().trim();
                const comment = $(element).find('.review-text').text().trim();

                reviews.push({ author, rating, comment });
        });

        return reviews;
    } catch (error) {
        console.error("Error fetching reviews: ", error);
        return [];
    }
  }
}

module.exports = GoogleReviewsFetcher;