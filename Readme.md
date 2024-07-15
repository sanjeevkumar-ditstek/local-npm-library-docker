# Local Library using Docker
This is a simple local library application using Docker.


## Folder Structure
    .
    ├── app                   # Main App which uses both the libraries
    ├── lib1                    # Sample Library 1
    ├── lib2                     # Sample Library 2
    └── README.md

# Tech Used
- Docker
- Node JS
- Express JS 

## Commands Used
1. Create Docker build from root directory

    ```docker build -t my-app -f ./app/Dockerfile .```

2. Running docker image

    ```docker run -p 3000:3000 my-app```

3. If want to debug inside image

    ```docker run -it --entrypoint sh my-app```


