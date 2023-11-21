## Project Setup Instructions

1. Clone the `mern-infrastructure` repo by running the following command in your terminal:

git clone https://github.com/JennyZhong2022/mern-infrastructure.git

Note that the folder created will be the same as `<name-of-project>` instead of `mern-infrastructure`.

2. Change into the project directory:

cd mern-infrastructure


3. npm install


4. Create a `.env` file and add entries for `DATABASE_URL` and `SECRET`:


Certainly! Below is how you would write the provided instructions in Markdown format:

markdown
Copy code
1. Clone the `mern-infrastructure` repo by running the following command in your terminal:
git clone <url-of-mern-infrastructure> <name-of-project>

javascript
Copy code
Note that the folder created will be the same as `<name-of-project>` instead of `mern-infrastructure`.

2. Change into the project directory:
cd name-of-project


3. Install the Node modules:
npm install


4. Create a `.env` file and add entries for `DATABASE_URL` and `SECRET`:
touch .env

Then, open the `.env` file and add the following lines:

DATABASE_URL=mongodb://localhost/your-database-name
SECRET=YourSecretString


5. Update the `name` in `package.json` to the name of your project by finding the line with `"name": "mern-infrastructure"` and changing `mern-infrastructure` to your project's name.

Make sure to replace `url-of-mern-infrastructure`, `name-of-project`, `your-database-name`, and `YourSecretString` with actual values relevant to your project. The < and > are placeholders and should not be included in the actual commands.