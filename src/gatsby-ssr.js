import React from "react";
import * as logger from "./logger";
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  if (process.env.NODE_ENV !== `production`) {
    logger.warningConsoleLogger("non production environment");
    return null;
  }
  if (pluginOptions.googleAdClientId === undefined) {
    logger.throwErorr("googleAdClientId is not set");
  }
  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents;
  return setComponents([
    <script
      async
      type="text/javascript"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />,
    <script
      key={`gatsby-plugin-google-adsense`}
      dangerouslySetInnerHTML={{
        __html: `
      (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: ${pluginOptions.googleAdClientId},
          enable_page_level_ads: true
      });
      `
      }}
    />
  ]);
};
