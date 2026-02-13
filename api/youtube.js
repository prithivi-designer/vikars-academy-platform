
export default async function handler(req, res) {
    // Configurable channel ID from request or fallback
    // The user should replace 'UCxxx' with their actual Channel ID.
    const channelId = req.query.channelId || 'UCxxx';

    // We recommend using the channel ID for stability.
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`YouTube RSS fetch failed: ${response.statusText}`);
        }
        const xml = await response.text();

        // Set headers to allow XML response and CORS if needed (Vercel handles basic CORS often)
        res.setHeader('Content-Type', 'application/xml');
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

        // Return raw XML to client
        res.status(200).send(xml);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
