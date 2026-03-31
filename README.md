# Week 5: DOM Manipulation & Event Handling

## Author
- **Name:** Your Full Name
- **GitHub:** [@MaisoriKitayama](https://github.com/MaisoriKitayama)
- **Date:** March 29, 2026

## Project Description
This repository contains a series of modular exercises designed to practice core Javascript DOM Manipulation and Event Handling techniques. The project progresses from basic element selection to sophisticated event delegation and real-time form validation.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Features
- Selecting and traversing DOM elements efficiently.
- Modifying HTML, Text Content, inline Styles, and Data Attributes dynamically.
- Programmatically creating, cloning, inserting, and safely removing DOM nodes.
- A functional Click Counter with boundary checks.
- Custom global Keyboard Shortcuts (`Ctrl+S`, `Escape`, `Ctrl+Enter`).
- Event Bubbling and Delegation successfully implemented on a dynamic Task List.
- Real-time form validation that strictly blocks default submission until all logic holds true.

## How to Run
1. Clone this repository
2. Open `index.html` in your browser from any of the local sub-folders (e.g., navigate to `eventHandling/index.html` and open it) to view the respective exercise.

## Lessons Learned
Gained hands-on experience manipulating the active DOM utilizing both classic and modern Javascript methods (`prepend`, `append`, `before`, `after`). Deepened my understanding of complex Event Handling, specifically learning how to logically set up Event Delegation by successfully attaching a single event listener to a parent `<ul>` instead of attaching multiple listeners to rapidly changing child `<li>` elements. 

## Challenges Faced
Managing events tied to dynamic form submissions and correctly targeting rapidly changing inner HTML elements required careful targeting. To resolve this complexity, utilizing `event.target.closest('li')`, `event.preventDefault()`, and actively checking `event.target.tagName` proved incredibly effective to smoothly delegate interactions without overwhelming the listener chain.

## Live Demo (if deployed)
[View Live Demo](https://your-deployed-url.com)

## Folder Structure & Setup Explanation
To keep the modules cleanly organized in this repository, the exercises are divided into two main lesson folders:

### `lesson 9/` (DOM Manipulation)
Contains the core DOM interaction exercises. To safely isolate the practice logic, the base HTML/CSS visual foundation was duplicated across the folders:
- **`selection/`**: Base HTML and CSS initially created for practicing simple DOM element selection (`getElementById`, `querySelectorAll`, etc).
- **`traversinDom/`**, **`modifyingContent/`**, **`add_removingElements/`**: These folders contain direct copies of the `selection` folder's core visual foundation. This ensures that the distinct Javascript logic for traversing, modifying, and adding/removing elements could be actively practiced step-by-step on a structured webpage without breaking past exercise code.

### `lesson 10/` (Events)
- **`eventHandling/`**: A freshly built exercise folder featuring a custom unified interface specifically developed from scratch. It seamlessly tackles the Event Handling Tasks (housing the functional Counter, Keyboard Shortcuts listener, Bubbling Task List, and Form Validation scripts dynamically in one complete application).
