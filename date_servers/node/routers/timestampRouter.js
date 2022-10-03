import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();

/**
 *  @openapi
 *  /timestamp:
 *      get:
 *          summary: Returns a current(now) timestamp(ISO 8601)
 *          description: Get current timestamp
 *          responses:
 *              200:
 *                  description: Returns a string timestamp
 */
router.get('/timestamp', (_, res) => {
   const timestamp = new Date();
   res.send({ timestamp });
});

/**
 *  @openapi
 *  /request-timestamp:
 *      get:
 *          summary: Sends a request to another server running on port 8000 and returns a current timestamp(ISO 8601)
 *          description: Request a current timestamp
 *          responses:
 *              200:
 *                  description: Returns a string timestamp
 *              500:
 *                  description: Returns an error object
 */
router.get('/request-timestamp', async (_, res) => {
   try {
      const fetchResponse = await fetch('http://127.0.0.1:8000/timestamp');
      const data = await fetchResponse.json();
      res.send({ requestedTimestamp: data.timestamp });
   } catch (error) {
      res.status(500).send({ error: error });
   }
});

export default router;
