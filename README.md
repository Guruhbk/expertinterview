# equalExpertNodejsProject

A simple Node.js Express API to fetch GitHub user data with input validation.  

Built with:
- Node.js 22 (Alpine)
- Express
- Axios
- Joi (input validation)
- Mocha + Chai + Supertest (for testing)

---

## Installation

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd equalExpertNodejsProject
npm install
```

## Running the application locally

```bash
npm start
```

The API will run on: http://localhost:8080

## Example request

```bash
curl http://localhost:8080/octocat
```

Response:
```bash

{
  "login": "octocat",
  "id": 583231,
  ...
}
```


## Docker

Build the Docker image:
```bash
docker build -t myapp .
```

Run the container:

```bash
docker run -p 8080:8080 myapp
```

Your app will be accessible at http://localhost:8080.

Note: The Dockerfile runs the app as a non-root user (node) for security.


## Testing

We use Mocha, Chai, and Supertest for API tests.

Run tests
```bash
npm run test
```

Tests include input validation and GitHub API mock tests.