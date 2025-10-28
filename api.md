POST /api/search/snapshot
  Input: { "name": "string", "image_url": "string | optional" }
  Output: { "reach": number, "results":[{ "title": "string", "url": "string", "date": "YYYY-MM-DD", "sentiment": "neutral|positive|negative" }] } // exakt 3 resultat

POST /api/checkout/purchase
  Input: { "plan": "single|bundle|subscription", "payment_intent_id": "string" }
  Output: { "status":"success", "report_id":"string" }

GET /api/report/{id}
  Output: { "reach": number, "sentiment": { "positive": number, "neutral": number, "negative": number }, "timeline":[{ "date":"YYYY-MM-DD", "value": number }], "mentions":[{ "title":"string", "url":"string", "date":"YYYY-MM-DD", "sentiment":"positive|neutral|negative", "summary":"string" }] }

POST /api/dsar/request
  Input: { "subject":"name|image_hash", "action":"delete|export" }
  Output: { "status":"received" }
