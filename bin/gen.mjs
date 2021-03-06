import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const { i18n } = await import(`./lang/${process.argv[2]}.mjs`);
const output = join(i18n.output, 'index.html');

const t = (key) => {
  if (i18n.t[key]) {
    return i18n.t[key];
  }
  return key;
};

const arr = (key) => {
  if (i18n.arr[key]) {
    return i18n.arr[key];
  }
  return [];
};

const enClass = (className) => {
  if (i18n.lang === 'en') {
    return ` ${className}`;
  }
  return '';
};

mkdirSync(i18n.output, { recursive: true });
writeFileSync(
  output,
  `
<html lang="${i18n.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />
    <title>ScalableDots - ${t('The tool to generate scalable pixel art images')}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
    <link href="/style.css" rel="stylesheet" />
    <script>
      window.dataLayer = [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-YK38G3B4MG');
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YK38G3B4MG"></script>
    <script src="/script.js"></script>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ScalableDots - ${t('The tool to generate scalable pixel art images')}" />
    <meta
      property="og:description"
      content="${t(
        'The tool to convert pixel art images such as PNG or GIF to SVG file. So that you can scale it with beautiful edges of each pixel. You can preview it on your browser as well as it provides command line tool.'
      )}"
    />
    <meta property="og:url" content="${t('url')}" />
    <meta property="og:site_name" content="ScalableDots" />
    <meta property="og:image" content="https://scalable-dots.otchy.net/images/summary.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@otchy" />
  </head>
  <body>
    <div class="jumbotron bg-svg pt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="d-flex justify-content-center">
              <div class="logo-wrapper">
                <h1 class="m-0">
                  <img src="/images/logo.svg" alt="ScalableDots" />
                </h1>
              </div>
            </div>
            <div class="text-center pt-1 pb-3">${t('switch-lang')}</div>
          </div>
          <div class="col-12 col-sm-8 col-md-6 mb-3 mb-sm-0">
            <div class="dialog p-3">
              <div class="d-flex">
                <div class="drop-here mx-auto mb-3 p-4 text-center">
                  <img src="/images/drop-here.svg" class="mb-3" /><br />
                  ${t('Drop image files or<br />click to select')}
                  <input class="file-input" type="file" accept="image/gif,image/jpeg,image/png,image/webp" />
                </div>
              </div>
              <div>${t('Try sample images first?')}</div>
              <select class="form-select sample-image">
                <option value="" selected>??? ${t('Select samaple image')}</option>
                ${arr('sample-images')
                  .map((params) => `<option value="${params[0]}">${params[1]}</option>`)
                  .join('\n                ')}
              </select>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3">
            <div class="dialog p-3">
              ${t('Seeing is believing')}
              <div class="btn-group" role="group">
                <input type="radio" class="btn-check" name="jumbotron-bg" value="svg" id="jumbotron-bg-svg" autocomplete="off" checked />
                <label class="btn btn-outline-primary" for="jumbotron-bg-svg">SVG</label>
                <input type="radio" class="btn-check" name="jumbotron-bg" value="png" id="jumbotron-bg-png" autocomplete="off" />
                <label class="btn btn-outline-primary" for="jumbotron-bg-png">PNG</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview">
      <div class="container pt-3">
        <div class="row">
          <div class="col-12 col-sm-4 col-md-3 col-xl-2 offset-md-1 offset-xl-2">
            <div class="row">
              <div class="col-12 d-flex flex-column">
                <img src="" class="img-thumbnail mx-auto bg-gray" />
                <div class="file-name mx-auto"></div>
                <div class="image-dimension mx-auto"></div>
              </div>
              <div class="col-12">
                <div class="h5 mt-3 preview-header">${t('SVG Settings')}</div>
              </div>
              <div class="col-12">
                <label class="h6 mb-1">${t('Type')}</label>
                <div class="btn-group" role="group">
                  <input type="radio" class="btn-check" name="type" value="square" id="type-square" autocomplete="off" checked />
                  <label class="btn btn-outline-primary" for="type-square">???</label>
                  <input type="radio" class="btn-check" name="type" value="circle" id="type-circle" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="type-circle">???</label>
                  <input type="radio" class="btn-check" name="type" value="rhombus" id="type-rhombus" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="type-rhombus">???</label>
                </div>
              </div>
              <div class="col-6 col-sm-12">
                <label for="size" class="form-label h6 mt-3 mb-0"
                  >${t('Size')}<small>[<span id="size-value">16</span>]</small></label
                >
                <input type="range" class="form-range" min="1" max="32" id="size" value="16" />
              </div>
              <div class="col-6 col-sm-12">
                <label for="gap" class="form-label h6 mt-3 mb-0"
                  >${t('Gap')}<small>[<span id="gap-value">1</span>]</small></label
                >
                <input type="range" class="form-range" min="0" max="32" id="gap" value="1" />
              </div>
              <div class="col-12">
                <div class="h5 mt-3 preview-header">${t('Preview')}</div>
              </div>
              <div class="col-6 col-sm-12">
                <label class="h6 mb-1">${t('Background color')}</label>
                <div class="btn-group" role="group">
                  <input type="radio" class="btn-check" name="preview-bg" value="black" id="preview-bg-black" autocomplete="off" />
                  <label class="btn btn-outline-primary${enClass('px-1')}" for="preview-bg-black">${t('Black')}</label>
                  <input type="radio" class="btn-check" name="preview-bg" value="gray" id="preview-bg-gray" autocomplete="off" checked />
                  <label class="btn btn-outline-primary${enClass('px-1')}" for="preview-bg-gray">${t('Gray')}</label>
                  <input type="radio" class="btn-check" name="preview-bg" value="white" id="preview-bg-white" autocomplete="off" />
                  <label class="btn btn-outline-primary${enClass('px-1')}" for="preview-bg-white">${t('White')}</label>
                </div>
              </div>
              <div class="col-6 col-sm-12">
                <label for="zoom" class="form-label h6 mt-3 mb-0"
                  >${t('Zoom')}<small>[<span id="zoom-value">100%</span>]</small></label
                >
                <input type="range" class="form-range" min="20" step="20" max="300" id="zoom" value="100" />
              </div>
              <div class="col-12 d-grid mt-3">
                <button class="save-svg btn btn-primary" type="button">${t('Save SVG')}</button>
              </div>
              <div class="col-12 d-grid my-1">
                <button class="close-preview btn btn-link" type="button">${t('Close')}</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-7 col-xl-6 mt-3 mt-sm-0">
            <div>
              <div class="svg-box bg-gray">
                <div class="svg-holder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="information pt-3">
      <div class="container">
        <div class="row">
          <div class="col mb-3">
            <h2 class="m-0">
              ${t('SVG image allows you to make beautifully scalable pixel art!')}
              <small>${t('Vector image for pixel art? Yes, you no longer need to know what nearest neighbour interpolation is!')}</small>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="d-flex col-12 col-md-6 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-box">${t('What ScalableDots is')}</h3>
              <p>
                ${t(
                  'ScalableDots is a tool for converting image files such as PNG and GIF into SVG image. The conversion is done by replacing each pixel in the original image with an element in SVG and filling it with the original color. Its primary usage is to convert pixel art to SVG.'
                )}
              </p>
              <p>
                ${t(
                  "It's hard to show how amazing the pixel art is when we show it on the web without scaling. By showing the pixel art as an SVG image, it can be nicely scaled at any magnification."
                )}
              </p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 mt-md-0 col-md-6 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-shop">${t('Why SVG?')}</h3>
              <p>
                ${t(
                  'When scaling pixel art images, typical raster image scaling algorithms result in a blurred image, so we need to select a proper algorithm as well as proper magnification to make each pixel edge sharp. Of course, there are tools that support this, but if we want to show it at multiple magnifications, we have to prepare multiple files as needed and switch them appropriately.'
                )}
              </p>
              <p>
                ${t(
                  'SVG images, on the other hand, are in vector format, so no matter how much we scale it, it will always be shown with a sharp edge of pixels at any magnification.'
                )}
              </p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 col-md-6 mt-xl-0 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-pot">${t('Complete in browsers')}</h3>
              <p>
                ${t(
                  "The page you're looking at now is the web version of ScalableDots. Unlike many other online tools, ScalableDots does everything in the browser. There is no need for uploading files thus it is fast, and there are no security concerns."
                )}
              </p>
              <p>
                ${t(
                  'Therefore, there is no limit to the size of the image to be processed, but the performance of the processing on the browser naturally depends on the computing resource of your machine.'
                )}
              </p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 offset-xl-1 col-xl-10 offset-xxl-0 col-xxl-8">
            <div class="panel">
              <h3 class="icon icon-shelf">${t('Command line version')}</h3>
              <p>
                ${t(
                  'A command line version is also available for those who want to convert large images that are too heavy to process in a browser, or for those who want to convert a large number of files at once. Please consider using the command line version if necessary.'
                )}
              </p>
              <h4>${t('System requirement')}</h4>
              <p>
                ${t(
                  'Node.js version 18 or later is required. Please <a href="https://www.google.com/search?q=Node.js+install" target="_blank">install</a> it in advance.'
                )}
              </p>
              <h4>${t('How to install')}</h4>
              <p>${t('To install the command line version of ScalableDots, use <code>npm</code> command bundled with Node.js.')}</p>
              <dl class="ps-3">
                <dt>${t('To install in a specific folder')}</dt>
                <dd><code>$ npm install @otchy/scalable-dots-cli</code></dd>
                <dt>${t('To install for the entire system')}</dt>
                <dd><code>$ npm install -g @otchy/scalable-dots-cli</code></dd>
              </dl>
              <h4>${t('How to run')}</h4>
              <p>
                ${t(
                  'The <code>scalable-dots</code> command writes the result of the conversion to SVG to standard output when an image file is passed as an argument, so redirect it to another file and save it.'
                )}
              </p>
              <dl class="ps-3">
                <dt>${t('If installed in a specific folder')}</dt>
                <dd><code>$ npx scalable-dots input.png > output.svg</code></dd>
                <dt>${t('If installed for the entire system')}</dt>
                <dd><code>$ scalable-dots input.png > output.svg</code></dd>
              </dl>
              <h4>${t('Command line options')}</h4>
              <p>
                ${t('The <code>scalable-dots</code> command accepts the following options')}
              </p>
              <table>
                <thead>
                  <tr>
                    <th>${t('Option')}</th>
                    <th>${t('Description')}</th>
                    <th>${t('Note')}</th>
                    <th>${t('Default')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>--type</code></td>
                    <td>${t('Type of dots')}</td>
                    <td>${t('<code>SQUARE</code>, <code>CIRCLE</code>, or <code>RHOMBUS</code>')}</td>
                    <td><code>SQUARE</code></td>
                  </tr>
                  <tr>
                    <td><code>--size</code></td>
                    <td>${t('Size of dots')}</td>
                    <td>${t('Integer value')}</td>
                    <td><code>16</code></td>
                  </tr>
                  <tr>
                    <td><code>--gap</code></td>
                    <td>${t('Gap between dots')}</td>
                    <td>${t('Integer value')}</td>
                    <td><code>1</code></td>
                  </tr>
                  <tr>
                    <td><code>--pretty-print</code></td>
                    <td>${t('Enable pretty-print output')}</td>
                    <td></td>
                    <td>${t('Disabled')}</td>
                  </tr>
                  <tr>
                    <td><code>--version</code></td>
                    <td>${t('Show version')}</td>
                  </tr>
                  <tr>
                    <td><code>--help</code></td>
                    <td>${t('Show help')}</td>
                  </tr>
                </tbody>
              </table>
              <dl class="mt-3 ps-3">
                <dt>${t('Example command')}</dt>
                <dd>
                  <code>$ scalable-dots --type=CIRCLE --size=32 --gap=0 --pretty-print input.png > output.svg</code>
                </dd>
              </dl>
            </div>
          </div>
          <div class="mt-3 col-12 offset-xl-1 col-xl-10 offset-xxl-0 col-xxl-4">
            <div class="panel">
              <h3 class="icon icon-board">${t('Contact')}</h3>
              <p>
                ${t(
                  'ScalableDots is created, published and maintained by Otchy (<a href="https://www.otchy.net" target="_blank">personal blog</a>). If you have any bug reports or feature requests, please let us know via <a href="https://twitter.com/otchy" target="_blank">Twitter</a>.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer mt-3 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <dl>
              <dt>${t('Credit for pixel art materials')}</dt>
              <dd>
                <a href="https://pipoya.net/" target="_blank">????????????</a>
              </dd>
              <dd>
                <a href="https://twitter.com/WhyToWight" target="_blank">????????????????????????</a>
              </dd>
              <dd>
                <a href="https://twitter.com/twotenky" target="_blank">????????????</a>
              </dd>
              <dd>
                <a href="https://twitter.com/syuironoitokuzu" target="_blank">Akke???</a>
              </dd>
              <dd>
                <a href="https://twitter.com/jagaimo1020" target="_blank">??????????????????</a>
              </dd>
            </dl>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <dl>
              <dt>${t('Supported browsers')}</dt>
              <dd>
                <a href="https://www.google.com/intl/ja_jp/chrome/" target="_blank">Google Chrome</a>
              </dd>
              <dd>
                <a href="https://www.mozilla.org/ja/firefox/new/" target="_blank">Firefox</a>
              </dd>
              <dd>
                <a href="https://www.apple.com/jp/safari/" target="_blank">Safari</a>
              </dd>
              <dd>
                <a href="https://www.microsoft.com/ja-jp/edge" target="_blank">Microsoft Edge</a>
              </dd>
              <dd>
                <a href="https://www.apple.com/jp/safari/" target="_blank">Mobile Safari (iOS)</a>
              </dd>
              <dd>
                <a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=ja" target="_blank">Mobile Google Chrome (Android)</a>
              </dd>
            </dl>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <dl>
              <dt>${t('Git repositories')}</dt>
              <dd>
                <a href="https://github.com/otchy210/scalable-dots-web" target="_blank">scalable-dots-web</a>
              </dd>
              <dd>
                <a href="https://github.com/otchy210/scalable-dots-cli" target="_blank">scalable-dots-cli</a>
              </dd>
              <dd>
                <a href="https://github.com/otchy210/scalable-dots-core" target="_blank">scalable-dots-core</a>
              </dd>
            </dl>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <dl>
              <dt>${t('Technologies')}</dt>
              <dd>
                <a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages</a>
              </dd>
              <dd>
                <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
              </dd>
              <dd>
                <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
            ScalableDots is written by
            <a href="https://twitter.com/otchy" target="_blank">Otchy</a>. Share it if you find it's valuable.
          </div>
          <div class="col-12 col-md-5 col-lg-6 col-xl-7 col-xxl-8 mt-2 mt-md-0 d-flex align-items-center">
            <div>
              <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-via="otchy" data-hashtags="pixelart,????????????">${t('Tweet')}</a>
            </div>
            <div class="ms-2">
              <a
                href="https://b.hatena.ne.jp/entry/"
                class="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic-label"
                data-hatena-bookmark-lang="${i18n.lang}"
                title="${t('Add this page to Hatena bookmark')}"
                ><img
                  src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                  alt="${t('Add this page to Hatena bookmark')}"
                  width="20"
                  height="20"
                  style="border: none"
              /></a>
            </div>
            <div class="ms-2">
              <div class="fb-share-button" data-href="${t('url')}" data-layout="button" data-size="small">
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t('url'))}&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                  >${t('Share')}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="file-type-error" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${t('Unsupporte file type')}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">${t('ScalableDots supports only PNG, JPEG, GIF, and WebP image files.')}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${t('Close')}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="file-size-info" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${t('Relatively large image file')}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            ${t(
              'ScalableDots does everything in the browser, so there is no limit to the size of the image to be processed. How large a file makes the process slow or, in the worst case, freezes your browser, depends on the computing resource of your machine.'
            )}<br />
            ${t(
              'This warning appears as a reminder when starting to process relatively large images, but you may of course start processing at your own decision.'
            )}<br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${t("Don't try")}</button>
            <button type="button" id="file-size-info-proceed" class="btn btn-primary">${t('Start processing')}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="file-size-warn" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-danger">${t('Fairly large image file')}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            ${t(
              'ScalableDots does everything in the browser, so there is no limit to the size of the image to be processed. How large a file makes the process slow or, in the worst case, freezes your browser, depends on the computing resource of your machine.'
            )}<br />
            ${t(
              "You can start processing at your decision, but it's not recommend because the selected image is quite large in size. Consider using the command line version which is lighter than the browser version."
            )}<br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${t("Don't try")}</button>
            <button type="button" id="file-size-warn-proceed" class="btn btn-primary">${t('Start processing anyway')}</button>
          </div>
        </div>
      </div>
    </div>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <script async src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8"></script>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/${i18n.locale}/sdk.js#xfbml=1&version=v14.0&appId=1421586228272139&autoLogAppEvents=1"
      nonce="Ea0OkAHn"
    ></script>
  </body>
</html>
`.trimStart()
);
