# 👥 User Management Dashboard

A responsive, lightning-fast user directory dashboard built with **React**, **Vite**, and **React-Bootstrap**. This application demonstrates clean state management, master-detail layout design, asymmetric data flows, and live search/filter pipelines communicating with external REST APIs.

🚀 **[Live Demo](https://jayalloyd.github.io/User-Management-Dashboard/)**

---

## 🛠️ Features Implemented

* **REST API Integration:** Fetches sample user directory streams dynamically from the JSONPlaceholder API using the native Fetch pipeline inside React lifecycle effects.
* **Real-time Search Filter:** Implements an instant lookup input field inside the Navbar container that filters users by Name or Email on the fly using case-insensitive JavaScript substring checking.
* **Dynamic Data Updates:** Includes dynamic item counters ("Total Users") that react instantaneously when entries are created, filtered, or purged.
* **State Extraction (Delete Mechanism):** Enables localized frontend removal of user entries without global page reloads or broken layout components.

---

## 🏗️ Architecture & Component Design

The application structure follows the **Lifting State Up** architectural pattern. `App.jsx` serves as the single source of truth, managing global state variations and distributing reactive properties or callback pipes directly down to child elements:

```text
src/
 ├── App.jsx                 # Single Source of Truth (Core Data Logic)
 ├── main.jsx                # DOM Mounting & Global Configurations
 └── components/
      ├── NavBar.jsx         # Branding, Global Counters & Search Fields
      ├── UserTable.jsx      # Content Row Mapping & Local Interaction Callbacks
      └── AddUserForm.jsx    # Managed Form Controls for Account Injection
```
💻 Tech Stack & Libraries
Library: React 18+ (Functional Components & Hooks)

Build Engine: Vite (Hot Module Replacement)

UI Framework: React-Bootstrap & Core Vanilla Bootstrap 5 Styles

Vector Icons: FontAwesome SVG Core Wrappers

🚀 Getting Started Locally
Follow these quick commands to spin up a local copy of this repository on your machine:

Clone the repository:

Bash
git clone [https://github.com/jayalloyd/User-Management-Dashboard.git](https://github.com/jayalloyd/User-Management-Dashboard.git)


cd User-Management-Dashboard

Install dependency structures:

```
npm install
```
Boot up the Vite local development server:

```
npm run dev
```
Open http://localhost:5173 in your web browser to view the application.
