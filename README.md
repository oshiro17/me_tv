## 使ってるバージョンとか

- Node.js: v20 以上がおすすめだよ〜
- React: 19.1.1
- React DOM: 19.1.1
- @react-three/fiber: 8.2.2
- @react-three/drei: 9.56.32
- three: 最新の安定版だよ
- TypeScript: 5 系
- あとね、@types/three みたいな型定義パッケージも使ってるよ

---

## 環境の準備の仕方

1. **まずはリポジトリをクローンしてね！**
   ```bash
   git clone https://github.com/あなたのユーザー名/warp-globe.git
   cd warp-globe
   ```

2. **次に依存関係をインストールしよっか！**
   ```bash
   npm install
   ```

3. **最後に開発サーバーを起動〜！**
   ```bash
   npm start
   ```

---


## ちょっと注意してほしいこと

- `public/hana.png` をちゃんと置いてね！  
  地球のまわりにかわいい小さな花アイコンがランダムに30個ポコポコ出てくるよ〜

---

## ファイルのざっくり説明だよ

このプロジェクトでよく使うファイルと、その役割をざっくり教えるね！

- `src/App.tsx`  
  アプリの入り口だよ。全体の構成とかルーティングを管理してるよ。
- `src/Globe.tsx`  
  地球儀とかピン、花のアイコンを描いてるメインのコンポーネントだよ。
- `src/CameraRig.tsx`  
  カメラの動き（ワープ演出）をコントロールしてるよ。
- `src/Pin.tsx`  
  ピン（目印のアイコン）を描いてるよ。
- `public/hana.png`  
  地球に置かれる花のアイコン画像だよ。
- `src/react-three-fiber.d.ts`  
  TypeScript用の型補助ファイル。three.jsとかreact-three-fiberの型情報を補ってくれるよ。
- あとね、`index.tsx`, `index.css` とかの普通の Create React App (CRA) のファイルも入ってるよ。  
  これらはアプリの起動とかスタイルの設定をしてくれてるんだ。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# me_tv
