# Next.js 15 App Router Unexpected Behavior

This repository demonstrates an unexpected behavior in Next.js 15's App Router when combining dynamic routes and data fetching.  The issue is that sometimes the data fetching doesn't work as expected, leading to unexpected rendering behavior, particularly with concurrent requests or certain routing patterns.

**Steps to Reproduce:**
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to different dynamic routes.  Note inconsistent data loading.

**Expected Behavior:**
Data should be fetched correctly and consistently for all dynamic routes.

**Actual Behavior:**
Inconsistent data fetching and rendering.  Data may not load correctly, potentially showing stale or missing data.  The problem seems to be related to how the App Router handles concurrent requests and data fetching for dynamic routes.