# 1. Project Description.

The main purposes of this website are to provide an online information database platform for students and teachers. This enables them to create and search for other users.

# 2. Installation.

To run this project locally, make sure you have the following:

1. Clone the repository:
   In your code editor, navigate into the directory where you want to install this project. In the terminal, run the following command:
   git clone https://github.com/nash300/web-project-new.git

2. Install dependencies:
   Staying at the same directory, run: "npm install".

3. Run the application.
   Now you can start the project by running: "npm run dev" command. This will initialize a local server and the server address will be visible
   in the terminal window. You can open the project in the browser by: 1. Ctr + Left-click on the URL or 2. Copy the URL and paste in your browser.

IMPORTANT! : Incase if it needs to install React in your computer, Please read the instructions at the borrom of this document.

# 3. Project Structure

The main components of the project are divided into three sections:

1. TopBarSection: Contains the logo and navigation menu list.
2. ButtonSection: Performs dialog flow by dynamically creating buttons for each dialog mask.
3. DisplaySection: Displays all results and outputs.

Global variables (e.g., useStates) are defined as context.providers and stored in the "context_files" folder.

# 4. Directory Structure

Src:

    components
    This folder contains all custom components. It has 2 sub-folders:

        Pages
        These are the individual pages and other components that are directly rendered in the "DisplaySection".

            AboutPage
            This is a static page which is displayed by a navigation list click.

            DisplayPolicyPage
            This is a static page which is displayed by a navigation list click.

            FeaturesPage
            This is a static page which is displayed by a navigation list click.

            HomePage
            This is a static page which is displayed by a navigation list click.

            ProfilePage
            This is a static page which is displayed by a navigation list click.

            RegistrationPage
            This component is used to get data from the user in the registration process.

            SearchPage
            This component is used to get data from the user in the search process.

            SearchResultPage
            This component is used to display results to the user.

            Section_components
            This folder contains the components mentioned in "# Project Structure" section of this document.

        MessageBox
        This is a special components that is used to display messages to the user.

    context_files:
    This folder contains the "context provider" file.

        Common-Context
        This context file includes all globaly declared states and their functions.

    mediaQ
    Media queries for the pages.

    images
    This folder contains the logo image and the background video.

    utilities
    This folder contains data objects and back-end configuration files.

        Button
        Contains the button objects used in the "ButtonSection".

        CountryList
        An array object which contains a list of countries (used in drop down menus)

        SubjectDisciplineList
        An array object which contains a list of subjects and their corresponding disciplines (used in drop down menus)

        CountryList
        An array object which contains a list of countries (used in drop down menus)

        SupabaseConfiguration
        This file includes back-end configurations.

    index.css:
    The stylings for generell page layout.

    pageStyles:
    The stylings for individual pages.

# 6. Future Implementations

This project is designed to facilitate furture developments such as:

User login feature:
In the current version, anyone can create or read user data without getting registered.
In future versions, the plan is to add a user login feature using the built-in "user authentication" feature provided by "Supabase."

User Profiles:
This feature will be implemented once the login feature is available.

Self Profile Management:
The current version does not provide users with the ability to update or delete their profiles and information. This feature can be added once the "user login" feature is implemented.

---

# 6. Installing React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
