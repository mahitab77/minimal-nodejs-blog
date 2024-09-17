

# Clean Blog - Start Bootstrap Theme

This is a Node.js and Express implementation of the "Clean Blog" theme from Start Bootstrap. It serves as a simple blogging platform with a clean, modern design, including dynamic routes for blog posts, an about page, and a contact page.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

"Clean Blog" is a stylish, responsive blog template designed to showcase content in an aesthetically pleasing way. This project adapts the template to run on a Node.js and Express backend, making it dynamic and easy to customize.

## Features

- Responsive design with a clean and modern layout
- Dynamic routes for blog posts, about, and contact pages
- Integration with third-party APIs (e.g., NewsAPI, SendGrid)
- Simple and customizable using EJS templates
- Easy to deploy and run locally

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/clean-blog.git
    cd clean-blog
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    Create a `.env` file in the root directory and add your environment variables. Refer to the example below:

    ```plaintext
    PORT=3000
    DB_HOST=localhost
    DB_USER=my_database_user
    DB_PASS=my_database_password
    DB_NAME=my_database_name
    SESSION_SECRET=mySuperSecretSessionKey
    NEWS_API_KEY=your_news_api_key_here
    SENDGRID_API_KEY=your_sendgrid_api_key_here
    NODE_ENV=development
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

    This command will start the server using `nodemon`, allowing for automatic restarts when changes are made.

## Usage

Once the server is running, you can access the application in your web browser at:

```
http://localhost:3000
```

- **Home**: Displays a list of blog posts.
- **About**: Provides information about the blog or author.
- **Sample Post**: Showcases a sample blog post.
- **Contact**: Allows users to contact the blog author.

## Configuration

The application uses environment variables to configure various settings. Make sure to create a `.env` file with the necessary credentials and settings. See the [Installation](#installation) section for more details.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MZ License. See the [LICENSE](LICENSE) file for more details.
```
