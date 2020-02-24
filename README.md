# gatsby-plugin-google-adsense

Add Google Adsense to your Gatsby site.

## Install

`npm install --save @isamrish/gatsby-plugin-google-adsense`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "YOUR_GOOGLE_ADSENSE_TRACKING_ID",
        head: false // Optional
      }
    }
  ]
};
```

## Options

### `googleAdClientId`

Here you place your Google Adsense tracking id.

### `head`

Here you can define where to place the tracking script. With `head:true` it will placed in the header, with `head:false` it will placed in the body. Defaults to `false`.
