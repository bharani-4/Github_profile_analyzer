# Github_profile_analyzer

A simple web application that allows users to search and analyze GitHub profiles using the GitHub REST API. The application fetches real-time GitHub user data and displays important profile information such as profile picture, bio, followers, following, and repositories in a clean and responsive interface.

---

## Features

* Search any GitHub user by username
* Display profile picture, name, and bio
* Show followers and following count
* Display number of public repositories
* List user repositories with links
* Responsive user interface

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API
* GitHub REST API

---

## Project Structure

```
github-profile-analyzer
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

1. The user enters a GitHub username in the search box.
2. JavaScript sends a request to the GitHub API.
3. The API returns user profile data in JSON format.
4. JavaScript processes the data and updates the webpage dynamically using DOM manipulation.
5. The application also fetches the user's repositories and displays them on the page.

---

## Installation and Usage

1. Clone the repository

```
git clone https://github.com/bharani-4/github-profile-analyzer.git
```

2. Navigate to the project folder

```
cd github-profile-analyzer
```

3. Open **index.html** in your browser.

No additional installation or dependencies are required.

---

## API Used

This project uses the GitHub REST API to retrieve user data and repository information.

Example endpoints:

```
https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos
```

---

## Future Improvements

* Add repository star counts
* Display programming languages used in repositories
* Add dark mode
* Show top repositories
* Improve UI design

---

## Deployment

The project can be deployed using GitHub Pages.

Steps:

1. Push the project to GitHub.
2. Go to repository **Settings**.
3. Open **Pages** section.
4. Select the **main branch** and save.

Your project will be live at:

```
https://bharani-4.github.io/github-profile-analyzer
```
---
## Author

Developed by Bharani.
