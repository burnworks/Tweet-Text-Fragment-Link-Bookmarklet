# Tweet-Text-Fragment-Link-Bookmarklet

Bookmarklet for making selected text "Text Fragments" and posting a link to Twitter.

ブラウザ上で選択したテキストを Text Fragments にして、閲覧中の Ｗebページ URL を Twitter に投稿するためのブックマークレット。

Google Chrome 81 以降では、"[Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)" をハイライト表示する機能（[Scroll to Text Fragment](https://chromestatus.com/feature/4733392803332096)）が実装されています。

このブックマークレットは、閲覧中のWebページでテキストを選択してから実行することで、選択したテキストを Text Fragments にしつつ、その URL をツイートするために、Twitter Web の投稿画面を開きます。

## 使い方

下記のブックマークレットをブラウザのブックマークツールバーなどに登録してください。閲覧中のWebページでテキストを選択後、ブックマークレットを実行します。

Twitter にログインしていれば投稿画面が開き、選択したテキストと、Text Fragments 付きの URL が投稿作成欄に自動入力されます。

```
javascript:const%20selectedText%3DgetSelection().toString()%3Bconst%20newUrl%3Dnew%20URL(location)%3BnewUrl.hash%3D%60%3A~%3Atext%3D%24%7BselectedText%7D%60%3Bconst%20twitterUrl%3D%60https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3D%24%7BencodeURIComponent(selectedText)%7D%26url%3D%24%7BencodeURIComponent(newUrl)%7D%60%3Bwindow.open(twitterUrl%2C'_blank')%3Bvoid(0);
```

## 注意点

- IE では動作確認していません。
- 現時点（2021年2月5日）で Text Fragments 付きの URL を開いた時にハイライト表示されるのは、Google Chrome （v81 以降）のみです。他のブラウザでは動作しません。

[URL Scroll-To-Text Fragment - Can I use...](https://caniuse.com/?search=scroll-to-text-fragment)
