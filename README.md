
### Cypress Test Project

This project contains end-to-end tests written in Cypress. It includes test case implementation and reporting features

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12 or above)
- npm (usually comes with Node.js)

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/JdGXII/cypress_automation_exercise
```

Navigate to the project directory:

```bash
cd cypress_automation_exercise
```

Install the necessary packages:

```bash
npm install
```

### Running Tests

To manually execute the Cypress tests, follow these steps:

1. Open the Cypress Test Runner by running the following command in the terminal:

   ```bash
   npx cypress open
   ```

2. Once the Test Runner is open, you will see a list of your test files, organized similarly to the structure shown in the accompanying screenshot.

3. You can navigate through the directories in the Test Runner to find specific test files (known as 'specs'). The tests are organized into directories such as `cypress\e2e` for end-to-end tests and `specs\api` for API tests.

4. To run a specific test, simply click on the test file you wish to execute. This will open a new testing window where Cypress will run the selected test.

5. For Feature tests (such as `demoblaze.feature` in the `features` directory), ensure you have the necessary plugins installed to run `.feature` files if using Cucumber with Cypress.

6. To run API tests like `petstore_api.spec.js`, select the test under the `specs\api` directory. API tests will execute in the runner without opening a browser window.

7. After running the tests, you can see the results directly in the Test Runner interface. You can also see the status of previously run tests, their last update time, and their average duration.

To run tests via the Cypress Test Runner:

```bash
npm run cypress:open
```

To run tests headlessly:

```bash
npm run cypress:run
```

## Reporting

This project uses [Mochawesome](https://github.com/adamgruber/mochawesome) for generating test reports.

### Generating Reports

After running the tests, Mochawesome will generate a report in the `mochawesome-report` directory. To open the report, simply open `mochawesome.html` in any web browser.

### Configuration

Mochawesome is configured in the `cypress.json` file. You can adjust settings like report file names and whether to include console output in the reports.

## Authors

- **Jose Raul Alzaibar**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

