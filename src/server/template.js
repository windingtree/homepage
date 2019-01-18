export default (html, helmet) => `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="icon" href="/favicon.ico">
        <link rel="stylesheet" type="text/css" href="css/styles.css">

         <!-- Schema.org markup for Google+ -->
        <meta itemprop="name" content="Winding Tree - Decentralized Travel Ecosystem">
        <meta itemprop="description" content="The missing open-source infrastructure layer for the travel industry">
        <meta itemprop="image" content="https://windingtree.com/assets/img/pages/index/socialbg.png">

        <!-- Twitter Card data -->
        <meta name="twitter:card" content="https://windingtree.com/assets/img/pages/index/socialbg.png">
        <meta name="twitter:site" content="@windingtree">
        <meta name="twitter:title" content="Winding Tree - Decentralized Travel Ecosystem">
        <meta name="twitter:description" content="The missing open-source infrastructure layer for the travel industry">
        <meta name="twitter:creator" content="@windingtree">
        <!-- Twitter summary card with large image must be at least 280x150px -->
        <meta name="twitter:image:src" content="https://windingtree.com/assets/img/pages/index/socialbg.png">

        <!-- Open Graph data -->
        <meta property="og:title" content="Winding Tree - Decentralized Travel Ecosystem">
        <meta property="og:type" content="article">
        <meta property="og:image" content="https://windingtree.com/assets/img/pages/index/socialbg.png">
        <meta property="og:description" content="The missing open-source infrastructure layer for the travel industry">
        <meta property="og:site_name" content="Winding Tree - Decentralized Travel Ecosystem">

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M9MPGNT');</script>
        <!-- End Google Tag Manager -->
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        <script src="js/client.js"></script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9MPGNT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    </body>
    </html>
`;
