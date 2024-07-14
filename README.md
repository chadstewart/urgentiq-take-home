# UrgentIQ Take-Home Assignment

This is a project to complete the UrgentIQ Take-Home Assignment.

## Run the project

After pulling the repo locally, navigate to the `urgentiq-take-home` folder and run this command:

```shell
npm run dev
```

## Assignment Prompt

Using a public API, display a list of all Star Wars characters using the endpoint “/people".

For every user, we’d like to display a card with the name of each character along with a random picture for each character (see Picsum photos for random picture inspiration). Each character card should be colored based on their species and have some kind of animation when the user hovers over the card. When we click on a character’s card, more information should appear in a modal about the character.

In the character details modal, we’d like to display information about the person: name as the header of the modal, height displayed in meters, mass in kg, date person was added to the API (in dd-MM-yyyy format), number of films the person appears in and their birth year. We should also fetch information about the person’s homeworld and display its name, terrain, climate, and amount of residents.

Bonus Points:

- Searching: To search, the user should enter a character name (partial or complete) and have all matching results returned
- Fitlering: For filtration, the user should be able to select either the homeworld, film, or species of any character and see results
- Pagination: The api has paging. How do we only show the page the user is on
- Loading and Error Handing: add a simple loader for fetching and handle error states

## Technology Choices

### Technologies Used

- Next.js
- ShadCn/UI
- Tailwind CSS
- TypeScript
- Storybook
- Vitest
- React Test Library

### Front-End Framework

Next.js was chosen as it was easy to spin up a new project with everything needed to complete the project without reaching for too many 3rd party libraries. Next.js also helps with performance in various ways such as providing a solid SSR solution out of the box, doing code-splitting and image compression out of the box as well.

To be noted that this projet leverages Next.js's pages router to make it easy to understand the seperation of business logic and presentation logic.

### Styling

Tailwind CSS was chosen for styling. Tailwind has a solid design system to start with, allowing for developers to quickly spin up a new project with solid defaults. Taiwind also makes it easy to debug CSS issues by adding CSS via predefined CSS classes rather than selecting the component and adding CSS directly to it. This makes it so that when there are CSS issues, they are generally associated with the component with the problem, making easy to identify to component and fix the issue.

### Components

The components were developed with an Atomic Design architecture (check out [this video](https://www.youtube.com/watch?v=W-h1FtNYim4) to learn more).

Storybook is used to document the design system for the project as well as view components without forcing you to render the entire project and potentially run business logic unnecessarily. It is also used to put pressure on the design of the components themselves. It does so by acting as a unit / isolated test, forcing a developer to accomodate adding components to Storybook without having to call business logic that Storybook may not be able to run.

ShadCN/UI was used as the component library. ShadCN/UI is specifically a Tailwind CSS component library, allowing you to continue to leverage Tailwind when working with imported components as opposed to other mechanisms for applying styling. Also, unlike other component libraries, ShadCN/UI puts the component directly into your project folder rather than having to import it from node_modules. This gives you ownership over the component to customize to the project as you see fit.

## Methodology

Most of the business logic (which are primarily API calls) lives in the getServerSideProps in the people's component in the pages router folder. The thought process was to keep as much of the business logic on the server as possible since we have access to one levearging Next.js. Once the API calls get the relevant data, they pass it to the people's component as props which will do the work of rendering the app.

Search & pagination are available to this project and is enabled by rerouting to the home page with the search parameter in the url. The server will make the API calls with the search parameter and pass the data down as props.

Quick note: To enable adding different colors to the each character card, a script was written to get every available species from SWAPI and generate a json that maps a species randomly to a hex color. That dataset is then leveraged to assign the color depending on the species. It should be noted that several characters do not have any species in assigned.

## Testing

The business logic of the project is tested using Vitest where the presentation logic is tested using Storybook to confirm that looks and feels as intended and Vitest and React Test Library to create snapshot tests for the component. Because the project is so modular, this makes testing very easy to do. This also allows functions that import other functions to rely on the fact they are tested and do not have to directly test their functionalities as well.

It is important to note that tests for the presentation logic is inherently flaky because the presentation logic is the most likely to change so tests will often break during the course of development. While this can be fixed by simply updating the snapshots once the component does what it needs to do on screen, it can be an annoyance.
