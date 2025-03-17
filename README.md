📱 MyApp - React Native Application
This is a React Native CLI (not Expo) mobile application featuring user authentication via Firebase, state management with Redux, and integration with the Thrones API for displaying characters.

📌 Features Implemented
✔ Firebase Authentication (Sign Up, Sign In, Persistent Login)
✔ Fetch & Display Characters from Thrones API
✔ Profile Screen with User Info & Logout
✔ Redux for State Management

🚧 Upcoming Features (Not Implemented Yet)
❌ Voice-to-Text Functionality
❌ Firebase Analytics
❌ Native Module for Battery Level Display
❌ Next.js Landing Page

🛠️ Technologies Used
React Native (CLI)
Redux Toolkit
Firebase Authentication & Database
Thrones API (Character Listing)
🚀 Installation & Setup
1️⃣ Prerequisites
Node.js >=18
React Native CLI
Android Studio (for Android development)
Xcode (for iOS development)
Firebase Project (configured with authentication and database)
2️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/MahthyHasan/taskOne.git
cd myApp
3️⃣ Install Dependencies
sh
Copy
Edit
npm install
4️⃣ Setup Firebase
Create a Firebase project at Firebase Console.
Enable Authentication (Email/Password).
Enable Firebase Database.
Download google-services.json (Android) & GoogleService-Info.plist (iOS).
Place them inside android/app/ and ios/ respectively.
5️⃣ Run the App
Android
npx react-native run-android


📺 Demonstration Video
Click here to watch the demo (https://drive.google.com/file/d/1ZGgiaa87uxp7sz8kmv4L7q9zcME4AIex/view?usp=drive_link)


📜 Folder Structure
bash
Copy
Edit
myApp/
│── android/              
│── ios/                 
│── src/
│   ├── components/
|        ├── screens/
|        ├── automs/          
│   ├── store/            
│   ├── auth/         
│── App.js                
│── README.md             
│── package.json  

📢 Future Improvements
Voice-to-Text Feature 🎙
Firebase Analytics for User Insights 📊
Battery Level Indicator using Native Code 🔋
Next.js Landing Page 🌍

📧 Contact
Author: Jawfer Mohamed Mahthy Hasan
Email: maheng907@gmail.com
LinkedIn: linkedin.com/in/mahthy-hasan
GitHub: MahthyHasan
