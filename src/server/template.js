export default html => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Winding Tree</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="css/styles.css">
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="js/client.js"></script>
    </body>
    </html>
`;
