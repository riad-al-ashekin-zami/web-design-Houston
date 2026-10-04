export default async (request, context) => {
  // Extract country code from Netlify's Edge Geo context
  const countryCode = (context.geo?.country?.code || "").toUpperCase().trim();

  // Explicitly block India (IN) and Pakistan (PK)
  if (countryCode === "IN" || countryCode === "PK") {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      text-align: center;
      padding: 24px;
    }
    .card {
      max-width: 520px;
      width: 100%;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 48px 32px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .icon {
      width: 52px;
      height: 52px;
      margin: 0 auto 20px;
      background-color: #fef2f2;
      border: 1px solid #fee2e2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ef4444;
    }
    h1 {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.4;
      color: #1e293b;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    </div>
    <h1>Access to this website is not available in your region.</h1>
  </div>
</body>
</html>`;

    return new Response(html, {
      status: 403,
      statusText: "Forbidden",
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  }

  // All other countries (BD, US, CA, UK, etc.) continue normally
  return context.next();
};

export const config = {
  path: "/*",
  excludedPath: ["/favicon.svg", "/robots.txt", "/sitemap.xml", "/sitemap_index.xml"],
};
