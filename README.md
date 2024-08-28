# :sparkles: Kick-DL :green_heart:

**Kick-DL is a command-line interface (CLI) tool designed for easily downloading VODs and Clips from Kick.com**

![CLI Screenshot](media/cli-screenshot.png)

> This CLI tool is inspired by [Twitch-DL](https://github.com/ihabunek/twitch-dl), created by [@ihabunek](https://github.com/ihabunek).

## Table of Contents :books:

- [Features :rocket:](#features-rocket)
- [Prerequisites :gear:](#prerequisites-gear)
- [Installation :package:](#installation-package)
- [Disclaimer :warning:](#disclaimer-warning)
- [Contributing :handshake:](#contributing-handshake)
- [License :scroll:](#license-scroll)
- [Contact :email:](#contact-email)
- [Acknowledgements :clap:](#acknowledgements-clap)

## Features :rocket:

- **Global Installation**: Install it anywhere on your system and access it from any terminal with no hassle.
- **Easy VOD Downloads**: Download Videos on Demand (VODs) from Kick quickly and easily with simple commands.
- **Fast Clip Downloads**: Grab and save clips from Kick effortlessly using an intuitive command-line interface.
- **Customizable Options**: Adjust settings like format and quality to get exactly what you want.

## Prerequisites :gear:

To use Kick-DL, ensure you have the following installed:

1. **Node.js**: Version 14.0.0 or higher. Download it from [Node.js official site](https://nodejs.org/).
2. **youtube-dl**: This tool is used internally for video downloading. Install it using pip:

    ```sh
    pip install --upgrade youtube-dl
    ```

3. **ffmpeg**: Required for handling media files. Installation varies by operating system:

    - **On Windows**: Download from [FFmpeg official site](https://ffmpeg.org/download.html) and follow the installation instructions.
    - **On macOS**: Use Homebrew:

        ```sh
        brew install ffmpeg
        ```

    - **On Linux**: Install via your package manager. For example, on Ubuntu:

        ```sh
        sudo apt update
        sudo apt install ffmpeg
        ```

## Installation :package:

**Install the Kick-DL package globally using the following command:**

```sh
npm install -g kick-dl
```

## Disclaimer :warning:

Kick-DL is not affiliated with or endorsed by [Kick.com](https://kick.com). It is an independent tool created to facilitate video downloads from the Kick.com platform.

## Contributing :handshake:

We welcome contributions! If you have suggestions, improvements, or bug fixes, please submit a `Pull Request` or open an `Issue`.

## License :scroll:

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for more details.

## Contact :email:

For questions or support, please contact me at [dev.juliogarciape@gmail.com](mailto:dev.juliogarciape@gmail.com).

## Acknowledgements :clap:

Special thanks to the developers of [youtube-dl](https://github.com/ytdl-org/youtube-dl) and [FFmpeg](https://ffmpeg.org/) for their excellent tools which made Kick-DL possible.

### Thanks for installing Kick-DL! :sparkling_heart:
