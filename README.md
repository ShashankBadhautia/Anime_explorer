# Anime Explorer – Search & Discover Anime

## Project Overview

Anime Explorer is a dynamic web application that allows users to search, filter, sort, and explore anime using real-time data from the Jikan API. It provides a smooth and interactive experience with features like infinite scrolling, advanced filtering, and responsive UI.

---

## Purpose

This project demonstrates:

* JavaScript API integration using `fetch`
* Use of Array Higher-Order Functions (HOFs)
* Dynamic DOM manipulation
* State management for search, filters, and pagination
* Responsive and interactive UI design

---

## API Used

This project uses the Jikan API (Unofficial MyAnimeList API)

Base URL:
https://api.jikan.moe/v4/

Example:
https://api.jikan.moe/v4/anime?q=naruto

---

## Features

### 🔍 Search

* Search anime by title using keywords
* Press Enter or click search button
* Real-time API fetching

---

### 🔥 Trending Anime

* Displays top anime on initial load
* Infinite scrolling to load more content dynamically

---

### ♾️ Infinite Scroll

* Automatically loads more anime on scroll
* Works for:

  * Trending anime
  * Search results

---

### ⚙️ Advanced Filtering

* Toggleable filter panel
* Filter by:

  * Type (TV, Movie, OVA, Special)

---

### 📊 Sorting

* Sort search results by:

  * Title (A → Z / Z → A)
  * Score (High → Low / Low → High)

---

### 🔁 Mode Switching

* Seamlessly switch between:

  * Search mode
  * Trending mode

* "Trending" button resets the application state

---

### 🎯 User Experience Enhancements

* Smooth UI transitions
* Hover effects on anime cards
* Clean and minimal design
* Scroll-to-top reset behavior

---

## Technologies Used

* HTML5
* CSS3 (Custom properties / variables)
* JavaScript (ES6+)
* Fetch API

---

## Project Structure

* `index.html` → Structure
* `style.css` → Styling
* `script.js` → Logic (API calls, UI rendering, state handling)

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/ShashankBadhautia/Anime_explorer.git
```

2. Open the folder:

```bash
cd Anime_explorer
```

3. Run the app:

* Open `index.html` in your browser

---

## Responsiveness

* Fully responsive design
* Works on:

  * Mobile devices
  * Tablets
  * Desktop screens

---

## Limitations

* Jikan API rate limits may affect rapid scrolling
* Sorting is applied per page (not globally across all results)
* Filtering supports one type at a time (API limitation)

---

## Future Enhancements

* Genre-based filtering
* Global sorting across all pages
* Debounced search (auto search while typing)
* Anime detail modal (click to view full info)
* Favorites system using localStorage
* Loading skeleton UI
* Progressive Web App (PWA) support

---

## Author

Shashank Badhautia
