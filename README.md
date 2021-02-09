# paraphernalia api

Api created for the Paraphernalia e-commerce project. It uses airtable and netlify serverless functions.

```
[build]
 functions="./functions"

[[redirects]]
 from ="/api/*"
 to="/.netlify/functions/:splat"
 status=200
```
