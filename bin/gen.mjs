import { writeFileSync } from 'fs';
import { join } from 'path';

const { i18n } = await import(`./lang/${process.argv[2]}.mjs`);
const output = join(i18n.output, 'index.html');

writeFileSync(
  output,
  `
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />
    <title>ScalableDots - 綺麗に拡大出来るドット絵生成ツール</title>
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
    <meta property="og:title" content="ScalableDots - 綺麗に拡大出来るドット絵生成ツール" />
    <meta
      property="og:description"
      content="PNG や GIF などのドット絵 (Pixel art) を、拡大しても綺麗なまま表示出来る SVG ファイルに変換するツールです。ブラウザ上でプレビューを確認しながら変換できるほか、コマンドラインツールも提供しています。"
    />
    <meta property="og:url" content="https://scalable-dots.otchy.net" />
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
            <div class="d-flex justify-content-center pb-3">
              <div class="logo-wrapper">
                <h1 class="m-0">
                  <img src="/images/logo.svg" alt="ScalableDots" />
                </h1>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-6 mb-3 mb-sm-0">
            <div class="dialog p-3">
              <div class="d-flex">
                <div class="drop-here mx-auto mb-3 p-4 text-center">
                  <img src="/images/drop-here.svg" class="mb-3" /><br />
                  画像ファイルをドロップ<br />もしくはクリックして選択
                  <input class="file-input" type="file" accept="image/gif,image/jpeg,image/png,image/webp" />
                </div>
              </div>
              <div>とりあえずサンプル画像で試す？</div>
              <select class="form-select sample-image">
                <option value="" selected>サンプル画像を選択</option>
                <option value="pigeon.png">ハト [8 x 8] (提供: ほわいとわいと様)</option>
                <option value="tortoise.png">陸ガメ [12 x 8] (提供: ほわいとわいと様)</option>
                <option value="bottle.png">タグ付き小瓶 [24 x 24] (提供: Akke様)</option>
                <option value="airship.png">飛空挺 [32 x 32] (提供: ぴぽや様)</option>
                <option value="elf.png">エルフ [45 x 55] (提供: 通天機様)</option>
                <option value="girl.png">青い服の女の子 [64 x 64] (提供: Akke様)</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3">
            <div class="dialog p-3">
              百聞は一見に如かず
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
                <div class="h5 mt-3 preview-header">SVG 設定</div>
              </div>
              <div class="col-12">
                <label class="h6 mb-1">タイプ</label>
                <div class="btn-group" role="group">
                  <input type="radio" class="btn-check" name="type" value="square" id="type-square" autocomplete="off" checked />
                  <label class="btn btn-outline-primary" for="type-square">■</label>
                  <input type="radio" class="btn-check" name="type" value="circle" id="type-circle" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="type-circle">●</label>
                  <input type="radio" class="btn-check" name="type" value="rhombus" id="type-rhombus" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="type-rhombus">◆</label>
                </div>
              </div>
              <div class="col-6 col-sm-12">
                <label for="size" class="form-label h6 mt-3 mb-0"
                  >サイズ<small>[<span id="size-value">16</span>]</small></label
                >
                <input type="range" class="form-range" min="1" max="32" id="size" value="16" />
              </div>
              <div class="col-6 col-sm-12">
                <label for="gap" class="form-label h6 mt-3 mb-0"
                  >すき間<small>[<span id="gap-value">1</span>]</small></label
                >
                <input type="range" class="form-range" min="0" max="32" id="gap" value="1" />
              </div>
              <div class="col-12">
                <div class="h5 mt-3 preview-header">プレビュー</div>
              </div>
              <div class="col-6 col-sm-12">
                <label class="h6 mb-1">背景色</label>
                <div class="btn-group" role="group">
                  <input type="radio" class="btn-check" name="preview-bg" value="black" id="preview-bg-black" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="preview-bg-black">黒</label>
                  <input type="radio" class="btn-check" name="preview-bg" value="gray" id="preview-bg-gray" autocomplete="off" checked />
                  <label class="btn btn-outline-primary" for="preview-bg-gray">灰</label>
                  <input type="radio" class="btn-check" name="preview-bg" value="white" id="preview-bg-white" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="preview-bg-white">白</label>
                </div>
              </div>
              <div class="col-6 col-sm-12">
                <label for="zoom" class="form-label h6 mt-3 mb-0"
                  >ズーム<small>[<span id="zoom-value">100%</span>]</small></label
                >
                <input type="range" class="form-range" min="20" step="20" max="300" id="zoom" value="100" />
              </div>
              <div class="col-12 d-grid mt-3">
                <button class="save-svg btn btn-primary" type="button">SVG を保存</button>
              </div>
              <div class="col-12 d-grid my-1">
                <button class="close-preview btn btn-link" type="button">閉じる</button>
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
              ドット絵は SVG 画像にすれば綺麗に拡大出来る！<small>ドット絵なのにベクター画像？そう、二アレストネイバー法なんてもう知らなくてもいい！</small>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="d-flex col-12 col-md-6 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-box">ScalableDots とは</h3>
              <p>
                ScalableDots は PNG や GIF などの画像ファイルを SVG 画像に変換するツールです。元の画像にある各ピクセルを一つずつ、SVG
                上の要素に置き換えて元の色で塗りつぶすことで変換を行っています。主な用途としては、ドット絵 (Pixel art) を SVG に変換するために使います。
              </p>
              <p>
                ドット絵を Web で公開する場合、等倍で表示すると小さすぎてドット絵としての魅力が十分に伝わらないので、一般には拡大して表示するようにしますが、SVG
                画像として公開する事で任意の倍率で綺麗に拡大することが出来るようになります。
              </p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 mt-md-0 col-md-6 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-shop">なぜ SVG？</h3>
              <p>
                元のドット絵を拡大する際、ラスター画像の画像拡大アルゴリズムによってはぼやけた表示になってしまうので、従来はエッジが綺麗になるように倍率やアルゴリズムを選ぶ必要がありました。もちろんそれをサポートするツールも存在しますが、複数の倍率で表示したい場合はその数だけファイルを用意して使い分けるなどの面倒がありました。
              </p>
              <p>一方の SVG 画像はベクター形式であるため、どこまで拡大してもドット絵としての魅力を保ったまま綺麗に表示することが出来ます。</p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 col-md-6 mt-xl-0 col-xl-4">
            <div class="panel">
              <h3 class="icon icon-pot">ブラウザ完結型</h3>
              <p>
                いま開いているこのページは ScalableDots ウェブ版ですが、その他の多くのオンラインツールとは異なり、ScalableDots
                は全ての処理をブラウザ内で完結しています。ファイルをアップロードする必要がないので高速で動作し、セキュリティ上の懸念もありません。
              </p>
              <p>
                したがって処理を行う画像のサイズにも制限はありませんが、ブラウザ上での処理のパフォーマンスは当然ながらあなたが使っているパソコンあるいはスマホの処理能力に依存します。
              </p>
            </div>
          </div>
          <div class="d-flex mt-3 col-12 offset-xl-1 col-xl-10 offset-xxl-0 col-xxl-8">
            <div class="panel">
              <h3 class="icon icon-shelf">コマンドライン版</h3>
              <p>
                ブラウザで処理をするには重たいサイズの大きな画像や、大量のファイルをまとめて変換したい人のために、コマンドライン版も用意されています。必要に応じてコマンドライン版の利用も検討して下さい。
              </p>
              <h4>システム要件</h4>
              <p>
                Node.js バージョン 18 以降が必要です。事前に<a
                  href="https://www.google.com/search?q=Node.js+%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB"
                  target="_blank"
                  >インストール</a
                >して下さい。
              </p>
              <h4>インストール方法</h4>
              <p>ScalableDots コマンドライン版のインストールには Node.js に同梱されているコマンドの <code>npm</code> を使います。</p>
              <dl class="ps-3">
                <dt>特定のフォルダにインストールする場合</dt>
                <dd><code>$ npm install @otchy/scalable-dots-cli</code></dd>
                <dt>システム全体にインストールする場合</dt>
                <dd><code>$ npm install -g @otchy/scalable-dots-cli</code></dd>
              </dl>
              <h4>実行方法</h4>
              <p>
                <code>scalable-dots</code> コマンドは引数に画像ファイルを渡すと SVG
                に変換した結果を標準出力に書き出すので、それを別のファイルにリダイレクトして保存してください。
              </p>
              <dl class="ps-3">
                <dt>特定のフォルダにインストールした場合</dt>
                <dd><code>$ npx scalable-dots input.png > output.svg</code></dd>
                <dt>システム全体にインストールした場合</dt>
                <dd><code>$ scalable-dots input.png > output.svg</code></dd>
              </dl>
              <h4>コマンドラインオプション</h4>
              <p>
                <code>scalable-dots</code>
                コマンドには以下のオプションを指定する事が出来ます。
              </p>
              <table>
                <thead>
                  <tr>
                    <th>オプション</th>
                    <th>説明</th>
                    <th>備考</th>
                    <th>デフォルト</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>--type</code></td>
                    <td>ドットの種類</td>
                    <td><code>SQUARE</code>, <code>CIRCLE</code>, <code>RHOMBUS</code> のいずれか</td>
                    <td><code>SQUARE</code></td>
                  </tr>
                  <tr>
                    <td><code>--size</code></td>
                    <td>ドットのサイズ</td>
                    <td>整数値で指定</td>
                    <td><code>16</code></td>
                  </tr>
                  <tr>
                    <td><code>--gap</code></td>
                    <td>ドット同士のすき間</td>
                    <td>整数値で指定</td>
                    <td><code>1</code></td>
                  </tr>
                  <tr>
                    <td><code>--pretty-print</code></td>
                    <td>出力する SVG を整形</td>
                    <td></td>
                    <td>無効</td>
                  </tr>
                  <tr>
                    <td><code>--version</code></td>
                    <td>コマンドのバージョンを表示</td>
                  </tr>
                  <tr>
                    <td><code>--help</code></td>
                    <td>コマンドのヘルプを表示</td>
                  </tr>
                </tbody>
              </table>
              <dl class="mt-3 ps-3">
                <dt>実行例</dt>
                <dd>
                  <code>$ scalable-dots --type=CIRCLE --size=32 --gap=0 --pretty-print input.png > output.svg</code>
                </dd>
              </dl>
            </div>
          </div>
          <div class="mt-3 col-12 offset-xl-1 col-xl-10 offset-xxl-0 col-xxl-4">
            <div class="panel">
              <h3 class="icon icon-board">お問い合わせ</h3>
              <p>
                ScalableDots は Otchy (<a href="https://www.otchy.net" target="_blank">個人ブログ</a>)
                が作成、公開、メンテナンスしています。不具合の報告や機能追加の要望などがあれば、<a href="https://twitter.com/otchy" target="_blank">Twitter</a>
                を通じてお伝えいただけると幸いです。
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
              <dt>ドット絵素材・サンプル画像提供</dt>
              <dd>
                <a href="https://pipoya.net/" target="_blank">ぴぽや様</a>
              </dd>
              <dd>
                <a href="https://twitter.com/WhyToWight" target="_blank">ほわいとわいと様</a>
              </dd>
              <dd>
                <a href="https://twitter.com/twotenky" target="_blank">通天機様</a>
              </dd>
              <dd>
                <a href="https://twitter.com/syuironoitokuzu" target="_blank">Akke様</a>
              </dd>
            </dl>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <dl>
              <dt>サポートブラウザ</dt>
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
              <dt>Git リポジトリ</dt>
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
              <dt>採用技術</dt>
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
              <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-via="otchy" data-hashtags="pixelart,ドット絵"> Tweet</a>
            </div>
            <div class="ms-2">
              <a
                href="https://b.hatena.ne.jp/entry/"
                class="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic-label"
                data-hatena-bookmark-lang="ja"
                title="このエントリーをはてなブックマークに追加"
                ><img
                  src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                  alt="このエントリーをはてなブックマークに追加"
                  width="20"
                  height="20"
                  style="border: none"
              /></a>
            </div>
            <div class="ms-2">
              <div class="fb-share-button" data-href="https://scalable-dots.otchy.net/" data-layout="button" data-size="small">
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscalable-dots.otchy.net%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                  >シェアする</a
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
            <h5 class="modal-title">サポートしていないファイルです</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">ScalableDots がサポートしている画像ファイルは、PNG、JPEG、GIF、WebP のみです。</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="file-size-info" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">比較的大きな画像ファイルです</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            ScalableDots
            は全てブラウザ上で動作するため、処理を行う画像ファイルの大きさに制限はありません。どのくらいのサイズになると処理が重くなるか、最悪のケースでブラウザが固まってしまうかは、あなたが使っているパソコンあるいはスマホの処理能力に依存します。<br />
            比較的大きな画像の処理を開始する際はこのような警告が念のため表示されますが、あなたの判断で処理を開始するのはもちろん構いません。<br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">止めておく</button>
            <button type="button" id="file-size-info-proceed" class="btn btn-primary">処理を開始する</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="file-size-warn" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-danger">かなり大きな画像ファイルです</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            ScalableDots
            は全てブラウザ上で動作するため、処理を行う画像ファイルの大きさに制限はありません。どのくらいのサイズになると処理が重くなるか、最悪のケースでブラウザが固まってしまうかは、あなたが使っているパソコンあるいはスマホの処理能力に依存します。<br />
            あなたの判断で処理を開始する事は出来ますが、選択された画像はかなりサイズが大きいのでこのまま処理を進めることはお勧めしません。ブラウザ版よりも負荷の少ないコマンドライン版の利用をご検討下さい。<br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">止めておく</button>
            <button type="button" id="file-size-warn-proceed" class="btn btn-primary">構わず処理を開始する</button>
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
      src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v14.0&appId=1421586228272139&autoLogAppEvents=1"
      nonce="Ea0OkAHn"
    ></script>
  </body>
</html>
`.trim()
);
