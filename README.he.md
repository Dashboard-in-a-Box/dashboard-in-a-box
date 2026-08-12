# Dashboard in a Box

🇮🇱 עברית | [🇬🇧 English](README.md)

**מערכות Dashboard, ממשקי ניהול ו־Command Centers**

> אני בונה למנהלים שכבת ניהול שמחברת את המידע שכבר קיים בארגון ומציגה אותו כתמונה אחת ברורה, כדי שהם יוכלו פחות לרדוף אחרי מידע ויותר לנהל ולקבל החלטות.

## אודות הפרויקט

**Dashboard in a Box** הוא פרויקט לפיתוח מערכות Dashboard, ממשקי ניהול ו־Command Centers, שהופכים מידע ותהליכים מורכבים לתמונה ניהולית אחת, ברורה וניתנת לפעולה.

המטרה אינה בהכרח להחליף את הכלים והמערכות שהארגון כבר משתמש בהם.

במקום זאת, המערכת יוצרת **שכבת ניהול** שמחברת מידע ממקורות קיימים ומאפשרת למנהל להבין את התמונה הרחבה, לעקוב אחר תהליכים ולקבל החלטות מבוססות מידע.

## הבעיה

בארגונים ובעסקים המידע כבר קיים — אבל הוא מפוזר.

הוא יכול להימצא ב:

* Excel ו־Google Sheets
* מסמכים וקבצים מקומיים
* Email
* מערכות ענן
* מערכות הזמנות
* מערכות חשבוניות
* מערכות מלאי
* מערכות ארגוניות שונות

כתוצאה מכך, מנהלים נדרשים לאסוף ולחבר מידע באופן ידני, תהליכים רבים דורשים מעקב ידני וקשה לראות תמונת מצב מלאה לאורך זמן.

**הבעיה אינה בהכרח חוסר במידע — אלא הקושי להפוך את המידע לתמונה ניהולית אחת.**

## מה אני בונה

Dashboard in a Box מתמקד בשלושה סוגים של מערכות ניהול:

### Management Dashboards

מערכות להצגת תמונת מצב ניהולית באמצעות:

* KPIs
* Charts
* Tables
* Filters
* Search
* Reports
* Alerts
* Trends

המטרה היא לאפשר למנהל לקבל תמונת מצב ברורה מבלי לעבור בין מספר מערכות וקבצים.

### Management Interfaces

מערכות פנימיות המאפשרות לא רק לראות מידע — אלא גם לנהל אותו.

הן יכולות לכלול:

* Forms
* Tasks
* Statuses
* Documents
* Users
* Roles
* Workflows

המטרה היא להפוך תהליך ידני ומפוזר למערכת מסודרת שניתן לעקוב אחריה ולנהל אותה.

### Command Centers

מערכות ניהול מקיפות המחברות:

**Dashboard + Data + Workflow + Tasks + Alerts**

ומאפשרות למנהל להבין:

* מה קורה
* מה השתנה
* מה דורש תשומת לב
* מה נמצא בסיכון
* מי אחראי
* מה צריך לעשות
* מה הסטטוס
* מה השלב הבא

העיקרון הוא:

**מידע → תהליך → החלטה → פעולה**

## התפיסה הטכנולוגית

Dashboard in a Box בנוי סביב **Dashboard Engine** משותף.

אותה תשתית טכנולוגית ואותה שכבת UI יכולות לשמש למספר Use Cases ניהוליים:

```text
                    Dashboard Engine
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
        Operations      Business      Education
       Command Center   Management    Management
```

העיקרון:

**One Engine → Multiple Management Use Cases**

## Portfolio Use Cases

### Operations Control Tower

מערכת לניהול תפעול הכוללת:

* Projects
* Tasks
* Employees
* Deadlines
* Issues
* SLA
* Status Tracking
* Alerts
* Activity Timeline

מטרתה להדגים כיצד מידע תפעולי הופך לתמונה ניהולית אחת.

### School Management Command Center

מערכת לניהול הפעילות הארגונית והניהולית בבית ספר.

המערכת אינה מחליפה את מערכת הדיווח הבית־ספרית הקיימת ואינה משכפלת מידע כגון נוכחות, ציונים או דיווחי מורים.

במקום זאת היא מחברת:

**Program → Meeting → Decision → Task → Owner → Due Date → Status**

ויוצרת מעין **"זיכרון ניהולי"** שמאפשר לחפש, לעקוב ולהבין את הקשרים בין אירועים, החלטות ופעולות.

Use Cases נוספים יוכלו להיבנות בהמשך על בסיס אותו Dashboard Engine.

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS

### Backend

* ASP.NET Core Web API

### Database

* SQL Server או PostgreSQL

### יכולות מתוכננות

* Responsive Dashboard Layout
* Reusable UI Components
* KPI Cards
* Charts
* Tables
* Search & Filtering
* Forms & Modals
* Notifications & Alerts
* Authentication
* Role-Based Access
* API Integration
* Workflow Management

## מבנה ה־Repository

```text
dashboard-in-a-box/
├── frontend/
├── backend/
├── docs/
├── README.md
└── README.he.md
```

## Roadmap

### Phase 1 — Foundation

* [ ] בניית Dashboard Engine
* [ ] יצירת Layout מרכזי
* [ ] בניית רכיבי UI לשימוש חוזר
* [ ] Charts, Tables, Filters ו־Forms

### Phase 2 — Full Stack

* [ ] בניית ASP.NET Core API
* [ ] חיבור Database
* [ ] חיבור Frontend ל־Backend
* [ ] CRUD בסיסי

### Phase 3 — Management Use Cases

* [ ] Operations Control Tower
* [ ] School Management Command Center
* [ ] Management Dashboard demos נוספים

### Phase 4 — Portfolio

* [ ] Architecture Documentation
* [ ] Screenshots
* [ ] Live Demos
* [ ] Technical Decisions
* [ ] Portfolio Website

## סטטוס הפרויקט

🚧 **בפיתוח פעיל**

Dashboard in a Box נמצא כעת בתהליך בנייה כתשתית משותפת למספר מערכות Dashboard ו־Command Center ניהוליות.
