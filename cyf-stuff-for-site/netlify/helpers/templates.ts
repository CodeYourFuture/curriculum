export const htmlRedirect = (
  redirectUrl: string,
  timeout?: number,
  message?: string
) => `
  <html lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <noscript>
        <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
      </noscript>
    </body>
    <script>
      setTimeout(function() {
        window.location.href = ${JSON.stringify(redirectUrl)}
      }, ${timeout || 0})
    </script>
    ${message ? `<p>${message}</p>` : ""}
  </html>`;
