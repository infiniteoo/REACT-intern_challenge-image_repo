
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

![example_gif](./image_repo_example.gif)

<!-- PROJECT LOGO -->
<br />
<p align="center">
 

  <h3 align="center">Shopify™ Images</h3>

  <p align="center">
    Intern Challenge - Image Repository
    <br />
    <a href="https://github.com/infiniteoo/intern_challenge-image_repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://imagerep0.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/infiniteoo/intern_challenge-image_repo/issues">Report Bug</a>
    ·
    <a href="https://github.com/infiniteoo/intern_challenge-image_repo/issues">Request Feature</a>
  </p>
</p>

## Live Version:

Demo Login:
Login: "a@a.com"
PW: "123"

Please note:  upon initial connect to the live demo, it seems to take 15-20 seconds to boot up.  I am assuming this is either Netlify or S3 "warming up".  After this delay, the site will run nominally without delay.

### https://imagerep0.netlify.app/

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Shopify™ is holding open tryouts for their Fall back-end developer intership programs, and tasked applicants to create an image repository utlizing whatever technologies they wished.

I was only made aware of this opportunity this past week, so the time I was able to put into it was probably not enough to properly reflect my ability, but I still gave my all and produced this product to demo.

## Parallel Projects

There are actually multiple open internship tryouts happening in parallel, with various roles asking for different project-type submissions. Along with this back-end intern tryout project "Shopify™ Images", I also created a demo project for their front-end internship tryout, entitled "Shopify™ Movie Awards".  

You can find the repository for the Movie Awards project here:
https://github.com/infiniteoo/intern_challenge-omdb

## Features

Utilizing the power of the MERN stack, this full-stack application allows for very basic user login authentication with MongoDB, and displays images utilzing the power and cutting-edge technology of Amazon Web Services S3 file storage system.  Material-UI is to thank for the slick, modern user interface.  All powered with the greatest Javascript front end known to man: React.js.  While I was unable to finish a user creation system, the basic login system allows for protection against unwarranted deletion of images.  Only the user who created the image can delete it.

## Missed Opportunities

Because of my limited time, and my decision to try to create TWO projects, there were some missed opportunities I was unable to fit in.  Unfortunately the project is due on Mother's Day, so I'm submitting what I have.  Passwords are currently being stored as plain text, for instance.  I opted to bypass the integration of BCrypt to try and save some time.  I also ran out of time to administer the ability to utilize localStorage for persistent logins. All of these features are easily implemented with time, but I had to make some tough decisions to get a properly-working MVP done in time.  

### Built With

[![react](https://aleen42.github.io/badges/src/react.svg)](https://aleen42.github.io/badges/src/react.svg)
[![eslint](https://aleen42.github.io/badges/src/eslint.svg)](https://aleen42.github.io/badges/src/eslint.svg)
[![javascript](https://aleen42.github.io/badges/src/javascript.svg)](https://aleen42.github.io/badges/src/javascript.svg)
[![github](https://aleen42.github.io/badges/src/github.svg)](https://aleen42.github.io/badges/src/github.svg)
[![npm](https://aleen42.github.io/badges/src/npm.svg)](https://aleen42.github.io/badges/src/npm.svg)
[![visual_studio_code](https://aleen42.github.io/badges/src/visual_studio_code.svg)](https://aleen42.github.io/badges/src/visual_studio_code.svg)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/infiniteoo/intern_challenge-image_repo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/infiniteoo/intern_challenge-image_repo/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@doorman_t](https://twitter.com/@doorman_t) - troydorman@gmail.com

Project Link: [https://github.com/infiniteoo/intern_challenge-image_repo](https://github.com/infiniteoo/intern_challenge-image_repo)








<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/infiniteoo/intern_challenge-image_repo?style=for-the-badge
[contributors-url]: https://github.com/infiniteoo/intern_challenge-image_repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/infiniteoo/intern_challenge-image_repo?style=for-the-badge
[forks-url]: https://github.com/infiniteoo/intern_challenge-image_repo/network/members
[stars-shield]: https://img.shields.io/github/stars/infiniteoo/intern_challenge-image_repo.svg?style=for-the-badge
[stars-url]: https://github.com/infiniteoo/intern_challenge-image_repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/infiniteoo/intern_challenge-image_repo.svg?style=for-the-badge
[issues-url]: https://github.com/infiniteoo/intern_challenge-image_repo/issues
[license-shield]: https://img.shields.io/github/license/infiniteoo/intern_challenge-image_repo?style=for-the-badge
[license-url]: https://github.com/infiniteoo/intern_challenge-image_repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/t-wayne-doorman