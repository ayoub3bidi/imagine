# IMAGINE (Server side)
AI image generation web app.

## Getting started

### Environment variables configuration
```
cp .env.example .env
```
This will make the .env file.

For the ```MONGODB_URL```, you need to get your Mongo DB connection link.  
For ```OPENAI_API_KEY```, you need to get your secret api key from OpenAI official website, create an account then go to ```view API keys``` in the menu.

## Available commands
```
pnpm install
```
This will install all the dependencies.

```
pnpm start
```
This will start the server on [http://localhost:8080](http://localhost:8080).