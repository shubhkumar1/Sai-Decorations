# Sai Decorations – Tent House & Event Services in Ranchi - Official Website & Admin Panel

Production-ready, SEO/AEO/GEO-optimized web application built for **Sai Decorations – Tent House & Event Services in Ranchi**, targeting searches for *tent house in Ranchi*, *tent and decoration in Ranchi*, and *Sai Decorations tent house*.

---

## 🌟 Key Features

1. **Public Site Pages:**
   - **Hero Section:** Cinematic aesthetic with parallax overlay & instant quote call-outs.
   - **10 Core Services:** Dedicated SEO pages for Wedding Arrangements, Tent House, Trust Pandal, Flower Decor, Balloon Decor, Event Management, Catering, DJ Light & Sound, Video & Photography, and Soundless Generators.
   - **Interactive Quote Builder:** Dynamic estimation calculator where users select guests count, date, services, and submit for direct WhatsApp confirmation.
   - **Availability Calendar:** Real-time blocked dates calendar synced with admin panel.
   - **Ranchi Locality Pages:** Targeted SEO pages for Lalpur, Kanke Road, Morabadi, Harmu, and Doranda.
   - **Bilingual i18n:** Seamless English / Hindi toggle.
   - **Timed Offer Popup Modal:** Admin-controlled visitor offer popup with hover pause and localStorage persistence.

2. **Admin Management Panel (`/admin`):**
   - **Google Authentication & Email Allow-List Security.**
   - **Enquiries CRM:** Searchable, filterable leads table with status workflow (`New`, `Contacted`, `Quoted`, `Confirmed`, `Lost`), internal notes editor, one-click Call/WhatsApp buttons, and CSV export.
   - **Offer Popup Manager:** Live preview canvas with title, image URL, discount badge, and date range controls.
   - **Blocked Dates Calendar:** One-click date locking on public availability calendar.
   - **Gallery & Packages Managers.**

3. **SEO / AEO / GEO Optimization:**
   - Full `LocalBusiness`, `Service`, `FAQPage`, and `Article` JSON-LD schemas.
   - Dynamic `sitemap.xml`, `robots.txt`, and `/llms.txt` route for AI engine citation (ChatGPT, Claude, Perplexity).

---

## 🚀 Environment & Setup Instructions

### 1. Local Development Setup
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run local dev server
npm run dev
```
Navigate to `http://localhost:3000`.

---

### 2. Firebase Configuration
1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Google Authentication** under **Authentication > Sign-in method**.
3. Create a **Firestore Database** and apply the rules in `firestore.rules`.
4. Add your Firebase Web App credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```

### 3. Admin Email Allow-List
In `.env.local`, specify comma-separated authorized emails:
```env
NEXT_PUBLIC_ADMIN_EMAILS=owner@saidecorationsranchi.com,saidecorationsranchi@gmail.com
```

---

### 4. Google Sheets Integration (Apps Script Webhook)
To automatically back up every submitted enquiry into a Google Sheet:
1. Open a new Google Sheet named **"Sai Decorations Enquiries"**.
2. Go to **Extensions > Apps Script** and paste the following code:
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.email,
    data.eventType,
    data.eventDate,
    data.venueCity,
    data.guestCount,
    data.budgetRange,
    data.servicesNeeded,
    data.message,
    data.status,
    data.source
  ]);
  return ContentService.createTextOutput(JSON.stringify({result: 'success'})).setMimeType(ContentService.MimeType.JSON);
}
```
3. Click **Deploy > New deployment** select **Web App**. Set access to **"Anyone"**.
4. Copy the Web App URL and paste it in `.env.local`:
```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

---

## 📦 Deployment to Vercel
1. Push project repository to GitHub.
2. Import repository in [Vercel](https://vercel.com).
3. Add all variables from `.env.example` in Vercel **Environment Variables**.
4. Click **Deploy**.
