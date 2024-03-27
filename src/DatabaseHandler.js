const { Pool } = require('pg');

class DatabaseHandler {
    constructor(dbConfig) {
        this.pool = new Pool(dbConfig);
    }

    async insertReviews(reviews) {
        const client = await this.pool.connect();

        try {
            for(const review of reviews) {
                const { author, rating, comment } = review;
                const query = `
                INSERT INTO reviews (author, rating, comment)
                VALUES ($1, $2, $3)
                ON CONFLINT DO NOTHING;
                `;
            await client.query(query, [author, rating, comment]);
            }
            } catch (error) {
                console.error("Error inserting reviews: ", error);
            } finally {
                client.release();
            }
        }
    }

module.exports = DatabaseHandler;