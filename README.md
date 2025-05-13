
*******LIVE DEMO -  https://dev-surajkumar.github.io/Quora-App/#/   **********

📚 Quora App – Major Project
This is a frontend-only implementation of a Quora-like application, built using ReactJS, based on a project assignment. The app simulates user interactions such as asking questions, creating posts, filtering by spaces, and viewing notifications.

📁 File Structure

src/
├── components/
│   ├── assets/        	 # Dummy images
│   ├── styles/       		 # All external CSS files
│   └── [components]   	 # Actual component files
		├── Details.js  # Dummy data for questions, posts, and spaces
├── AuthContext/        	 # Authentication context (login state, popups)

**WHAT'S WORKING**

1. Log In/user/LogOut:- Created with useForm, It successfully authenticates and let's 	you login and renders the first letter of username displayed conditionally. Upon 	clicking the username, Logout appears and when clicked makes the user Logout. I 	have used localstorage and authcontext.

2. Spaces:- Clicking the input box opens the box where you can create spaces. The space 	list is rendered on the home page and when a new space is created, it is 	displayed on the top of the left side of home page. I have not created a 	separate page for spaces. 

3. Notifications page(for all notifications), Answer page(for all the questions- no way 	to answer them yet), Add Question/ Add Post box to add the questions/posts, 	Dropdown to create post

4. Responsive CSS design for  all the components.
         
⚙️ Technologies & Concepts Used

React Hooks:

	useState – Handling space creation, form data, filters, etc.

	useEffect – Used in cards for questions/posts, and upvote/downvote logic.

	useContext – Global login state, popups for asking questions/posts.

	useForm – Login, Logout, Signup forms.

React Router DOM:

	BrowserRouter, Routes, Route, Link – For dynamic routing.

Styling:

	Pure CSS used (No Tailwind or Bootstrap).

	Responsive design to handle breaking points.

State Management & Logic:

	Props for data flow (e.g., filters)

	Conditional Rendering using ternary operators.

localStorage – Used for storing and retrieving questions/posts (no backend yet).

ES6 syntax and modular code organization.

Best Practices:

	Component reusability

	Clear naming conventions

	Code readability and modular design

🧠 Backend Substitution

Since backend implementation is not in scope, a file named Details.js is created containing hardcoded array objects (questions, posts, spaces). These arrays are imported into components and rendered conditionally.

✅ Feature Implementation Based on Assignment
🔹 Home Page (4 Sections)
✅ Navigation Bar

✅ Space Creation

✅ Filter Section for Spaces

✅ Question Box (Ask/Answer/Post)

✅ Posts Section

🔹 Navigation Bar
Feature				Status				Notes
Logo (Text, Linked to Home)	✅				Implemented using Link
Home				✅				Content.jsx component
Following			❌				Not implemented(No Page)
Answer				✅				Implemented
Spaces				✅				Implemented (No separate 								Page. only on homepage)
Notifications			✅				Routed to separate page
Static Search			✅				Present in navbar
Profile (Login Auth)		✅				Auth with Login/Signup
Add Question (Popup)		✅				Popup with Post/Question 								toggle

🔹 Question Box Features
	✅ Add Question: Title, Add/Cancel buttons using useState and conditional 		    rendering.

	✅ Create Post: Dropdown for visibility, text area, post button.

	✅ Static Toolbar: Ask, Answer, Post (non-functional, but present visually).

🔹 Filter Section (Spaces)
	✅ Create Space Input: Input field redirects to the space creation box.

	✅ Display at least 5 spaces: Done using dummy data in Details.js rendered 		    through LeftSpace.jsx. And when new Space is created, it displays on top!

🔹 Posts Section
Each post includes:

✅ Author name

✅ Author bio/qualification

✅ Date of post

✅ Question title

✅ Associated image

✅ Answer text

✅ Icons for upvote, downvote, share, comment

🔹 Bonus: Notifications Page
✅ Two Sections:

Left Side (Filters): At least 5 filter categories

Right Side (Notifications): Includes dummy data, truncated text with ellipsis (...) for long entries.

📝 Final Notes
This project demonstrates my understanding of React fundamentals and component-based UI design. It is built entirely with frontend tools and simulates a full Quora-like experience. Backend integration will be added once I learn those skills.

