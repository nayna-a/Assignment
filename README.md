
STEP-
 mkdir google-auth 
 cd google-auth        
 mkdir server      
 cd server
 npm init --y          
 npm i express nodemon cors dotenv passport-google-oauth20 cookie-session
add server.js file in under Server,node module
create .env in server
Then 
cd google-auth       
npx create-react-app client
cd client
npm i axios react-router-dom
create .env in client
# google-auth
- Node.js
- npm
- Google Developer Console credentials
- ## Setting Up the Backend
1. Clone the repository.
2. Create a `.env` file in the backend directory.
3. Add the following environment variables to `.env`:
Backend Command
cd backend
npm install
node server.js

Frontend Command
cd frontend
npm install
npm start

Running the Application
Start the backend server (node server.js).
Start the frontend server (npm start).
Visit http://localhost:3000 to log in using Google.


Install Dependancy
mkdir google-oauth-login
cd google-oauth-login
npm init -y
npm install express passport passport-google-oauth20 cookie-session dotenv
npx create-react-app google-oauth-frontend
cd google-oauth-frontend
npm install axios
