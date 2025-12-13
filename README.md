# Dashboard Automation Using Playwright

A comprehensive end-to-end testing automation framework for the Aqary International dashboard application using Playwright.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Suites](#test-suites)
- [Page Object Model](#page-object-model)
- [Test Reports](#test-reports)
- [Contributing](#contributing)

## 🎯 Overview

This project provides automated testing for the Aqary International dashboard application. It covers various modules including authentication, settings, project management, reports, and legal department functionality.

## ✨ Features

- **Page Object Model (POM)**: Organized and maintainable test structure
- **Multi-browser Support**: Tests run on Chromium, Edge, and WebKit
- **Comprehensive Coverage**: Tests for multiple dashboard modules
- **Authentication State Management**: Uses saved authentication state for faster test execution
- **Detailed Reporting**: HTML test reports with screenshots and videos on failure
- **Parallel Execution**: Tests run in parallel for faster execution

## 📁 Project Structure

```
Dashboard-Automation-Using-Playwright/
├── dashboard-project/
│   ├── tests/
│   │   ├── pages/              # Page Object Model classes
│   │   │   ├── LoginPage.js
│   │   │   ├── ProjectPage.js
│   │   │   ├── ReportPage.js
│   │   │   ├── LegalDepartmentPage.js
│   │   │   └── ...
│   │   ├── Settings/           # Settings module tests
│   │   │   ├── Settings-Account/
│   │   │   ├── Settings-Finance/
│   │   │   ├── Settings-General/
│   │   │   ├── Settings-Legal/
│   │   │   └── Settings-Listing/
│   │   ├── ExternalAccount/    # External account creation tests
│   │   ├── utils/              # Helper utilities
│   │   └── *.spec.js           # Test specifications
│   ├── playwright.config.js    # Playwright configuration
│   ├── package.json
│   └── playwright-report/      # Test reports
├── testdata/                   # Test data files
│   ├── images/
│   └── prjctimport/
├── auth.json                   # Saved authentication state
├── package.json
└── README.md
```

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git** (optional, for cloning the repository)

## 📦 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Dashboard-Automation-Using-Playwright
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd dashboard-project
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

### Playwright Configuration

The main configuration file is located at `dashboard-project/playwright.config.js`. Key settings include:

- **Test Directory**: `./tests`
- **Timeout**: 15 seconds per test
- **Parallel Execution**: Enabled by default
- **Reporters**: HTML reporter for detailed reports
- **Browsers**: Chromium (default), Edge, and WebKit
- **Screenshots/Videos**: Captured on test failure and retry

### Environment Variables

You can configure environment-specific settings by modifying the base URL in the Page Object classes or using environment variables.

### Authentication

The project uses saved authentication state (`auth.json`) to avoid logging in before each test. This file is generated after a successful login test.

## 🚀 Running Tests

### Run all tests

```bash
cd dashboard-project
npx playwright test
```

### Run tests in a specific browser

```bash
# Chromium (default)
npx playwright test --project=chromium

# Edge
npx playwright test --project=Edge

# WebKit (Safari)
npx playwright test --project=webkit
```

### Run a specific test file

```bash
npx playwright test tests/LoginPage.spec.js
```

### Run tests in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Run tests with UI mode

```bash
npx playwright test --ui
```

### Run tests matching a pattern

```bash
npx playwright test --grep "Login"
```

## 📚 Test Suites

### Authentication
- `LoginPage.spec.js` - Login validation (success and invalid credentials)

### External Accounts
- `ExternalAccount/1_CreateAccountIndividual.spec.js` - Create individual account
- `ExternalAccount/2_CreateAccountCompany.spec.js` - Create company account

### Settings Module

#### Settings - Account
- Account Industry
- Account Type
- Account Activity
- Manage Modules

#### Settings - Finance
- Coins Pricing
- Tax Management

#### Settings - General
- Country Management
- State Management
- City Management
- Community Management
- Sub-Community Management
- Property Location
- Currency Management
- Document Categories
- Language Management
- Media Category

#### Settings - Legal
- Licenses
- Certificates
- Legal Conditions

#### Settings - Listing
- Type Management
- Facts Management
- Facilities Management
- Amenities Management
- Views Management
- Type Configs

### Other Modules
- `ProjectPage.spec.js` - Project management tests
- `ImportProjectTest.spec.js` - Project import functionality
- `ReportTest.spec.js` - Report generation tests
- `LegalDepartmentTest.spec.js` - Legal department tests
- `ProfilesAgencyPageTest.spec.js` - Agency profile tests
- `AqaryIntTest.spec.js` - Aqary International specific tests

## 🏗️ Page Object Model

The project follows the Page Object Model (POM) pattern for better code organization and maintainability. Each page has its own class in the `tests/pages/` directory.

Example usage:
```javascript
import { LoginPage } from "./pages/LoginPage.js";

const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login(username, password);
await loginPage.assertLoginSuccess();
```

## 📊 Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test execution summary
- Pass/fail status
- Screenshots on failure
- Videos on failure (when enabled)
- Execution time

Reports are saved in the `playwright-report/` directory.

## 🛠️ Utilities

The `tests/utils/helpers.js` file contains helper functions that can be reused across tests.

## 📝 Test Data

Test data is stored in the `testdata/` directory:
- `images/` - Image files for testing
- `prjctimport/` - CSV files for project import tests

## 🔒 Authentication State

The `auth.json` file stores the authentication state after a successful login. This allows tests to skip the login step when applicable, making tests run faster.

**Note**: Make sure to add `auth.json` to `.gitignore` if it contains sensitive information.

## 🤝 Contributing

1. Create a new branch for your feature
2. Write tests following the existing Page Object Model pattern
3. Ensure all tests pass
4. Submit a pull request

## 📄 License

ISC

## 👤 Author

[Your Name/Organization]

## 🙏 Acknowledgments

- Built with [Playwright](https://playwright.dev/)
- Using [@faker-js/faker](https://fakerjs.dev/) for test data generation

