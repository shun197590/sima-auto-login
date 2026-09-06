# 產業園區安全防護系統 - 一鍵快速登入 PWA (固定完整密碼版)

此版本**不需手動輸入 5 碼**，已配置為完整固定密碼。

## 如何修改自訂完整密碼
打開 `index.html`，在第 77 行修改：
```javascript
const DEFAULT_PASSWORD = "你的完整密碼";
```

## 部署至 GitHub Pages
1. 在 GitHub 建立公開 repository。
2. 上傳本目錄內所有檔案（`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`）。
3. 至 Repository **Settings -> Pages**，選擇 `main` branch 並存檔。
4. 在手機瀏覽器開啟網址後「加入主畫面」。
