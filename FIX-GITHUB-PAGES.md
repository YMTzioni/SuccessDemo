# תיקון בעיית העיצוב ב-GitHub Pages

## הבעיה:
האתר עובד מקומית אבל העיצוב לא נטען ב-GitHub Pages.

## הפתרון:

### שלב 1: בדוק את שם ה-Repository
1. לך ל-GitHub repository שלך
2. בדוק את ה-URL של האתר:
   - אם זה `username.github.io/repository-name` → צריך basePath
   - אם זה `username.github.io` בלבד → לא צריך basePath

### שלב 2: עדכן את next.config.js

אם ה-URL הוא `username.github.io/repository-name`, עדכן את `next.config.js`:

```javascript
basePath: '/repository-name',  // החלף repository-name בשם האמיתי
trailingSlash: true,
assetPrefix: '/repository-name',  // אותו שם
```

### שלב 3: בנה מחדש ופרסם

```bash
npm run build
git add .
git commit -m "Fix GitHub Pages basePath"
git push origin main
```

### שלב 4: בדוק את ה-Deployment

1. לך ל-Actions ב-GitHub
2. בדוק שהבנייה הצליחה
3. בדוק את ה-URL החדש

## פתרון אוטומטי (אם לא יודע את השם):

אם אתה לא בטוח בשם ה-repository, אפשר להשתמש ב-environment variable:

```javascript
basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
```

אבל זה עובד רק ב-GitHub Actions, לא מקומית.

## אלטרנטיבה - Vercel:

אם יש בעיות, Vercel הוא הפתרון הכי קל ל-Next.js:
1. לך ל-vercel.com
2. התחבר עם GitHub
3. בחר את ה-repository
4. Deploy - זה עובד אוטומטית!

