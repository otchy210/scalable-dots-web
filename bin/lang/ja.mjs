export const i18n = {
  lang: 'ja',
  locale: 'ja_JP',
  output: 'docs/',
  t: {
    'The tool to generate scalable pixel art images': '綺麗に拡大出来るドット絵生成ツール',
    'The tool to convert pixel art images such as PNG or GIF to SVG file. So that you can scale it with beautiful edges of each pixel. You can preview it on your browser as well as it provides command line tool.':
      'PNG や GIF などのドット絵 (Pixel art) を、拡大しても綺麗なまま表示出来る SVG ファイルに変換するツールです。ブラウザ上でプレビューを確認しながら変換できるほか、コマンドラインツールも提供しています。',
    url: 'https://scalable-dots.otchy.net',
    'switch-lang': '日本語 | <a href="/en/">English</a>',
    'Drop image files or<br />click to select': '画像ファイルをドロップ<br />もしくはクリックして選択',
    'Try sample images first?': 'とりあえずサンプル画像で試す？',
    'Select samaple image': 'サンプル画像を選択',
    'Seeing is believing': '百聞は一見に如かず',
    'SVG Settings': 'SVG 設定',
    Type: 'タイプ',
    Size: 'サイズ',
    Gap: 'すき間',
    Preview: 'プレビュー',
    'Background color': '背景色',
    Black: '黒',
    Gray: '灰',
    White: '白',
    Zoom: 'ズーム',
    'Save SVG': 'SVG を保存',
    Close: '閉じる',
    'SVG image allows you to make beautifully scalable pixel art!': 'ドット絵は SVG 画像にすれば綺麗に拡大出来る！',
    'Vector image for pixel art? Yes, you no longer need to know what nearest neighbour interpolation is!':
      'ドット絵なのにベクター画像？そう、二アレストネイバー法なんてもう知らなくてもいい！',
    'What ScalableDots is': 'ScalableDots とは',
    'ScalableDots is a tool for converting image files such as PNG and GIF into SVG image. The conversion is done by replacing each pixel in the original image with an element in SVG and filling it with the original color. Its primary usage is to convert pixel art to SVG.':
      'ScalableDots は PNG や GIF などの画像ファイルを SVG 画像に変換するツールです。元の画像にある各ピクセルを一つずつ、SVG 上の要素に置き換えて元の色で塗りつぶすことで変換を行っています。主な用途としては、ドット絵 (Pixel art) を SVG に変換するために使います。',
    "It's hard to show how amazing the pixel art is when we show it on the web without scaling. By showing the pixel art as an SVG image, it can be nicely scaled at any magnification.":
      'ドット絵を Web で公開する場合、等倍で表示すると小さすぎてドット絵としての魅力が十分に伝わらないので、一般には拡大して表示するようにしますが、SVG 画像として公開する事で任意の倍率で綺麗に拡大することが出来るようになります。',
    'Why SVG?': 'なぜ SVG？',
    'When scaling pixel art images, typical raster image scaling algorithms result in a blurred image, so we need to select a proper algorithm as well as proper magnification to make each pixel edge sharp. Of course, there are tools that support this, but if we want to show it at multiple magnifications, we have to prepare multiple files as needed and switch them appropriately.':
      '元のドット絵を拡大する際、ラスター画像の画像拡大アルゴリズムによってはぼやけた表示になってしまうので、従来はエッジが綺麗になるように倍率やアルゴリズムを選ぶ必要がありました。もちろんそれをサポートするツールも存在しますが、複数の倍率で表示したい場合はその数だけファイルを用意して使い分けるなどの面倒がありました。',
    'SVG images, on the other hand, are in vector format, so no matter how much we scale it, it will always be shown with a sharp edge of pixels at any magnification.':
      '一方の SVG 画像はベクター形式であるため、どこまで拡大してもドット絵としての魅力を保ったまま綺麗に表示することが出来ます。',
    'Complete in browsers': 'ブラウザ完結型',
    "The page you're looking at now is the web version of ScalableDots. Unlike many other online tools, ScalableDots does everything in the browser. There is no need for uploading files thus it is fast, and there are no security concerns.":
      'いま開いているこのページは ScalableDots ウェブ版ですが、その他の多くのオンラインツールとは異なり、ScalableDots は全ての処理をブラウザ内で完結しています。ファイルをアップロードする必要がないので高速で動作し、セキュリティ上の懸念もありません。',
    'Therefore, there is no limit to the size of the image to be processed, but the performance of the processing on the browser naturally depends on the computing resource of your machine.':
      'したがって処理を行う画像のサイズにも制限はありませんが、ブラウザ上での処理のパフォーマンスは当然ながらあなたが使っているパソコンあるいはスマホの処理能力に依存します。',
    'Command line version': 'コマンドライン版',
    'A command line version is also available for those who want to convert large images that are too heavy to process in a browser, or for those who want to convert a large number of files at once. Please consider using the command line version if necessary.':
      'ブラウザで処理をするには重たいサイズの大きな画像や、大量のファイルをまとめて変換したい人のために、コマンドライン版も用意されています。必要に応じてコマンドライン版の利用も検討して下さい。',
    'System requirement': 'システム要件',
    'Node.js version 18 or later is required. Please <a href="https://www.google.com/search?q=Node.js+install" target="_blank">install</a> it in advance.':
      'Node.js バージョン 18 以降が必要です。事前に<a href="https://www.google.com/search?q=Node.js+%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB" target="_blank">インストール</a>して下さい。',
    'How to install': 'インストール方法',
    'To install the command line version of ScalableDots, use <code>npm</code> command bundled with Node.js.':
      'ScalableDots コマンドライン版のインストールには Node.js に同梱されているコマンドの <code>npm</code> を使います。',
    'To install in a specific folder': '特定のフォルダにインストールする場合',
    'To install for the entire system': 'システム全体にインストールする場合',
    'How to run': '実行方法',
    'The <code>scalable-dots</code> command writes the result of the conversion to SVG to standard output when an image file is passed as an argument, so redirect it to another file and save it.':
      '<code>scalable-dots</code> コマンドは引数に画像ファイルを渡すと SVG に変換した結果を標準出力に書き出すので、それを別のファイルにリダイレクトして保存してください。',
    'If installed in a specific folder': '特定のフォルダにインストールした場合',
    'If installed for the entire system': 'システム全体にインストールした場合',
    'Command line options': 'コマンドラインオプション',
    'The <code>scalable-dots</code> command accepts the following options': '<code>scalable-dots</code> コマンドには以下のオプションを指定する事が出来ます。',
    Option: 'オプション',
    Description: '説明',
    Note: '備考',
    Default: 'デフォルト',
    'Type of dots': 'ドットの種類',
    '<code>SQUARE</code>, <code>CIRCLE</code>, or <code>RHOMBUS</code>': '<code>SQUARE</code>, <code>CIRCLE</code>, <code>RHOMBUS</code> のいずれか',
    'Size of dots': 'ドットのサイズ',
    'Integer value': '整数値',
    'Gap between dots': 'ドット同士のすき間',
    'Enable pretty-print output': '出力する SVG を整形',
    Disabled: '無効',
    'Show version': 'バージョンを表示',
    'Show help': 'ヘルプを表示',
    'Example command': 'コマンド例',
    Contact: 'お問い合わせ',
    'ScalableDots is created, published and maintained by Otchy (<a href="https://www.otchy.net" target="_blank">personal blog</a>). If you have any bug reports or feature requests, please let us know via <a href="https://twitter.com/otchy" target="_blank">Twitter</a>.':
      'ScalableDots は Otchy (<a href="https://www.otchy.net" target="_blank">個人ブログ</a>) が作成、公開、メンテナンスしています。不具合の報告や機能追加の要望などがあれば、<a href="https://twitter.com/otchy" target="_blank">Twitter</a> を通じてお伝えいただけると幸いです。',
    'Credit for pixel art materials': 'ドット絵素材・サンプル画像提供',
    'Supported browsers': 'サポートブラウザ',
    'Git repositories': 'Git リポジトリ',
    Technologies: '採用技術',
    Tweet: 'ツイート',
    'Add this page to Hatena bookmark': 'このエントリーをはてなブックマークに追加',
    Share: 'シェアする',
    'Unsupporte file type': 'サポートしていないファイルです',
    'ScalableDots supports only PNG, JPEG, GIF, and WebP image files.': 'ScalableDots がサポートしている画像ファイルは、PNG、JPEG、GIF、WebP のみです。',
    'Relatively large image file': '比較的大きな画像ファイルです',
    'ScalableDots does everything in the browser, so there is no limit to the size of the image to be processed. How large a file makes the process slow or, in the worst case, freezes your browser, depends on the computing resource of your machine.':
      'ScalableDots は全てブラウザ上で動作するため、処理を行う画像ファイルの大きさに制限はありません。どのくらいのサイズになると処理が重くなるか、最悪のケースでブラウザが固まってしまうかは、あなたが使っているパソコンあるいはスマホの処理能力に依存します。',
    'This warning appears as a reminder when starting to process relatively large images, but you may of course start processing at your own decision.':
      '比較的大きな画像の処理を開始する際はこのような警告が念のため表示されますが、あなたの判断で処理を開始するのはもちろん構いません。',
    "Don't try": '止めておく',
    'Start processing': '処理を開始する',
    'Fairly large image file': 'かなり大きな画像ファイルです',
    "You can start processing at your decision, but it's not recommend because the selected image is quite large in size. Consider using the command line version which is lighter than the browser version.":
      'あなたの判断で処理を開始する事は出来ますが、選択された画像はかなりサイズが大きいのでこのまま処理を進めることはお勧めしません。ブラウザ版よりも負荷の少ないコマンドライン版の利用をご検討下さい。',
    'Start processing anyway': '構わず処理を開始する',
  },
  arr: {
    'sample-images': [
      [['pigeon.png'], ['ハト [8 x 8] (提供: ほわいとわいと様)']],
      [['tortoise.png'], ['陸ガメ [12 x 8] (提供: ほわいとわいと様)']],
      [['globe.png'], ['地球儀 [12 x 16] (提供: じゃがいも様)']],
      [['bottle.png'], ['タグ付き小瓶 [24 x 24] (提供: Akke様)']],
      [['airship.png'], ['飛空挺 [32 x 32] (提供: ぴぽや様)']],
      [['elf.png'], ['エルフ [45 x 55] (提供: 通天機様)']],
      [['girl.png'], ['青い服の女の子 [64 x 64] (提供: Akke様)']],
    ],
  },
};
