# פתרון לבעיית בנייה תקועה

אם הבנייה תקועה, נסה את השלבים הבאים:

## 1. עצור את התהליך
לחץ `Ctrl+C` בטרמינל

## 2. נקה את ה-cache
```bash
rm -rf .next
rm -rf node_modules/.cache
```

או ב-PowerShell:
```powershell
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules\.cache
```

## 3. התקן מחדש את ה-dependencies
```bash
npm install
```

## 4. נסה לבנות שוב
```bash
npm run build
```

## 5. אם עדיין תקוע, נסה עם יותר memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

או ב-PowerShell:
```powershell
$env:NODE_OPTIONS="--max-old-space-size=4096"; npm run build
```

## 6. אם עדיין לא עובד, נסה לבנות ללא cache:
```bash
rm -rf .next
npm run build -- --no-cache
```

## פתרונות נוספים:

### בדוק אם יש תהליכי Node.js שרצים:
```powershell
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
```

### נסה לבנות עם verbose output:
```bash
npm run build -- --debug
```

### אם יש בעיות עם Tailwind, נסה:
```bash
npx tailwindcss -i ./app/globals.css -o ./test-output.css --watch
```

