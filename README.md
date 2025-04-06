**Frontend – SuperMorpheus App**
This is a React-based frontend for adding and viewing motivational quotes from members.

**🚀 How to Run the App:**
1. Install Dependencies
cd SuperMorpheus_Frontend/supermorpheus
npm install

**3. Start the Frontend App:**
npm run dev
⚠️ Ensure the backend is running on http://localhost:5000.

**📦 Tech Stack:**
-React (Vite) – Fast frontend build setup
-Axios – For making API calls
-React Toastify – For displaying success/error messages
-Custom CSS – Lightweight and responsive styling

**📁 Folder Structure:**
SuperMorpheus_Frontend/
│
└── src/
    ├── components/
    │   ├── AddMemberForm.jsx
    │   ├── MemberCard.jsx
    │   └── FilterSortBar.jsx
    │
    ├── styles/
    │   ├── AddMemberForm.css
    │   ├── FilterSortBar.css
    │   └── MemberCard.css
    │
    ├── App.jsx
    └── main.jsx

└── index.html


**🧪 Features:**
✅ Add motivational quotes (with proper validation)
✅ Display success and error toasts for better UX
✅ View a list of quotes with filtering & sorting options
✅ Clean and responsive UI design

**🛡️ Input Validation Rules:**
-Text	Minimum 5 characters
-Author	Minimum 2 characters
-Email	Must be in a valid format

**🔔 Toast Notifications:**
Using react-toastify for real-time feedback:
✅ Success:
"🎉 Motivation added successfully!"

❌ Error:
"🚫 Please fix validation errors / Server errors"

**Install Toastify if not already done:**
npm install react-toastify
