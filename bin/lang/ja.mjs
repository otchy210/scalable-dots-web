export const i18n = {
  lang: 'ja',
  output: 'docs/',
  t: {
    'The tool to generate scalable pixel art images': '綺麗に拡大出来るドット絵生成ツール',
    'The tool to convert pixel art images such as PNG or GIF to SVG file. So that you can scale it with beautiful edges of each pixel. You can preview it on your browser as well as it provides command line tool.':
      'PNG や GIF などのドット絵 (Pixel art) を、拡大しても綺麗なまま表示出来る SVG ファイルに変換するツールです。ブラウザ上でプレビューを確認しながら変換できるほか、コマンドラインツールも提供しています。',
    'og:url': 'https://scalable-dots.otchy.net',
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
    'The page you’re looking at now is the web version of ScalableDots. Unlike many other online tools, ScalableDots does everything in the browser. There is no need for uploading files thus it is fast, and there are no security concerns.':
      'いま開いているこのページは ScalableDots ウェブ版ですが、その他の多くのオンラインツールとは異なり、ScalableDots は全ての処理をブラウザ内で完結しています。ファイルをアップロードする必要がないので高速で動作し、セキュリティ上の懸念もありません。',
    'Therefore, there is no limit to the size of the image to be processed, but the performance of the processing on the browser naturally depends on the computing resource of your machine.':
      'したがって処理を行う画像のサイズにも制限はありませんが、ブラウザ上での処理のパフォーマンスは当然ながらあなたが使っているパソコンあるいはスマホの処理能力に依存します。',
  },
  arr: {
    'sample-images': [
      [['pigeon.png'], ['ハト [8 x 8] (提供: ほわいとわいと様)']],
      [['tortoise.png'], ['陸ガメ [12 x 8] (提供: ほわいとわいと様)']],
      [['bottle.png'], ['タグ付き小瓶 [24 x 24] (提供: Akke様)']],
      [['airship.png'], ['飛空挺 [32 x 32] (提供: ぴぽや様)']],
      [['elf.png'], ['エルフ [45 x 55] (提供: 通天機様)']],
      [['girl.png'], ['青い服の女の子 [64 x 64] (提供: Akke様)']],
    ],
  },
};
