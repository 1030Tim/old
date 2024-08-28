// Import the Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to increment the view count
function updateViewCount() {
    const viewCountRef = ref(database, 'viewCount');
    get(viewCountRef).then((snapshot) => {
        let viewCount = snapshot.exists() ? snapshot.val() : 0;
        viewCount++;
        document.getElementById('view-count').textContent = viewCount;
        set(viewCountRef, viewCount);
    });
}

window.onload = updateViewCount;