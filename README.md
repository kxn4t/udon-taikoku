# うどん大国
マルチアカウント対応のPost専用クライアントです。
Electronでできてます。

![うどん](https://github.com/kxn4t/udon-taikoku/blob/master/udon.png "うどん")

Electron,node.js,javascriptの超絶初心者が作ったので色々ひどいです。  
動くのは動きます。  

# いまのところ必要なもの
- node.js
- electron
- https://github.com/vanita5/mastodon-api
- https://github.com/jessicahayley/node-mastodon
- http://photonkit.com

# インストール方法
### 1.node.jsをインストールする
### 2.うどん大国をgit cloneする  
`git clone https://github.com/kxn4t/udon-taikoku.git`
### 3.うどん大国のディレクトリに移動してelectronをインストールする
`npm install electron --save`
### 4.そのままmastodon-api,node-mastodon,photonをインストールする
`npm install`

# アカウントの追加方法

まずはじめにアカウントを追加します。  
うどん大国のディレクトリで以下を実行します。  
`node src/main/accountSetting`  
実行すると、インスタンス名、インスタンスのURLを聞かれるので入力してEnter。  
インスタンス名はリストに表示される名前になるだけですのでなんでも大丈夫です。  
インスタンスのURLは一番後ろのスラッシュは取って入力します。  
例えば`https://mstdn.club`のように入力します。  

すると、URLが表示されるのでブラウザでアクセスし、認証します。  
認証後、コードが表示されるので、これを入力してください。  
jsonにアカウント情報が保存されます。  

# 起動方法
`./node_modules/.bin/electron .`

# ライセンス
MIT  
Thanks! mastodon-api,node-mastodon,photon

Post専用のため特になにもないとは思いますが、くれぐれも自己責任でお願いします。  
当方責任は負えません。

