# הוראות פרסום ל-GitHub Pages

## שלבים לפרסום האתר ב-GitHub Pages

### 1. הכנת ה-Repository

1. ודא שיש לך repository ב-GitHub
2. ודא שהקוד שלך ב-branch `main` (או `master`)

### 2. הגדרת GitHub Pages

1. לך ל-Settings ב-repository שלך
2. לחץ על "Pages" בתפריט הצד
3. תחת "Source", בחר "GitHub Actions"
4. שמור את השינויים

### 3. Push הקוד ל-GitHub

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 4. בדיקת ה-Deployment

1. לך ל-tab "Actions" ב-repository
2. תראה workflow בשם "Deploy to GitHub Pages"
3. לחץ עליו כדי לראות את ההתקדמות
4. אחרי שהבנייה מסתיימת, האתר יהיה זמין ב:
   - `https://[username].github.io/[repository-name]`

### 5. אם האתר לא ב-root

אם ה-repository שלך לא נקרא כמו ה-username שלך, תצטרך לעדכן את `next.config.js`:

```javascript
basePath: '/[repository-name]',
trailingSlash: true,
```

ואז לבנות מחדש.

## הערות חשובות

- האתר ייבנה כ-static site (לא server-side rendering)
- כל התמונות מ-Unsplash יעבדו כי הן כבר עם `unoptimized`
- הטופס ב-`/contact` לא יעבוד ישירות - תצטרך להוסיף שירות כמו Formspree או Netlify Forms

## אלטרנטיבות

אם יש בעיות עם GitHub Pages, אפשר להשתמש ב:
- **Vercel** - הכי קל ל-Next.js (מומלץ!)
- **Netlify** - גם תומך ב-Next.js מצוין
- **Cloudflare Pages** - חינמי ומהיר

