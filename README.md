# :sparkles: Kick-DL :green_heart:

**Kick-DL is a command-line interface (CLI) tool designed for easily downloading VODs and clips from Kick.com.**

> Kick-DL uses [youtube-dl](https://github.com/ytdl-org/youtube-dl) for downloading videos and [ffmpeg](https://github.com/FFmpeg/FFmpeg) for handling media formats.

## Features :rocket:

- **Download VODs**: Retrieve complete VODs.
- **Download Clips**: Save individual clips.

## Prerequisites :gear:

To use Kick-DL, ensure you have the following installed:

1. **Node.js**: Version 14.0.0 or higher. Download it from [Node.js official site](https://nodejs.org/).
2. **youtube-dl**: This tool is used internally for video downloading. Install it using pip:

    ```sh
    pip install youtube-dl
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

**Install Kick-DL globally:**

```sh
npm install -g kick-dl

kick-dl --version
```

## Disclaimer :warning:

Kick-DL is not affiliated with or endorsed by [Kick.com](https://kick.com). It is an independent tool created to facilitate video downloads from the Kick.com platform.

## Contributing :handshake:

We welcome contributions! If you have suggestions, improvements, or bug fixes, please submit a `Pull Request` or open an `Issue`.

## License :scroll:

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for more details.

## Contact :email:

For questions or support, please contact me at [dev.juliogarciape@gmail.com](mailto:dev.juliogarciape@gmail.com).

#### Thank you for using Kick-DL!
