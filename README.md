# IMPLEMENTING 2 CHATBOTS USING GPT-3 AND OPENAI

## INSTRUCTIONS TO RUN THE PROJECT:

The first step to run this program is to make sure that `node` and `npm` are up to date. To do so, many managers and package managers are online, however, the best and the most standard in the whole scenario is the `nvm` manager, you can look more into that [here](https://github.com/nvm-sh/nvm).

Now that we have the `node` and `npm` up to date, we must install the requisites of the project:
```bash
npm i
```

After that, you can see that in the `package.js` there are some scripts that are prepared to initiate the project. It is as easy as the following command:

```bash
npm start
```

The previous command can be replaced with (in the root directory of the project):

```bash
node index.js
```

Once the program is running, it will be runnining in the [`localhost:8080`](localhost:8080/swagger/) address, and you can take a peak at the api definition going at the [`localhost:8080/swagger/`](localhost:8080/swagger/)

## TECHNOLOGIES USED FOR THIS PROJECT:
### We have used *Node.js* for running our server and we have used *Express* as the *Node.js* most famous framework, which let us to do a bunch of things, for example, use the corresponding HTTP verbs (GET, POST, PUT, DELETE,...) by means of routes in our project.

### We decided to use Swagger UI, which provides us with a documentation for our project and an intuitive way of interacting with our API, making it much easier to interact with it, even if the user does know little about programming.


## WHAT IS GPT-3, OPENAI AND WHAT CAN WE USE THEM FOR?
### OpenAi is an organitzation that created the GPT-3 model. This model is a very extended neural network aimed to the automatic learning based, obviously, in Artificial Inteligence (AI). It's most attractive is that is an AI that it's done in a very specific way that the user feels that his responses are very natural, so we can say that it's aim is to generate natural responses by means of natural language. We can make a bunch of diferent things with it, which include:
- Making a bot with the context that we want (sarcastic bot, friendly bot, an emotion-understandable bot, etc.)
- We can write a funtion in JavaScript (or Python) and GPT-3 will tell us what is this function for, which are the parameters that this function has, what does it return, etc. and it's capable of doing this but the other way around (we can write what we want a function to do and GPT-3 will give us this function made in Python). A great example of this implementation is the project done by GitHub, [Github Copilot](https://copilot.github.com).
- We can ask him to write us a text about any subject that we want in a certain style (Ex. Shakespire style, *Miguel de Cervantes* style, etc.)
- We can ask him about an image with specific characteristics and GPT-3 will provide it to us.
- ...
### And a bunch of other cool things, so as we can see, we are in front of a very powerful tool which we can use for practically everything we can think of (computational-alike, of course).

## OpenAI definition

OpenAI requires some setting up before using, there is some need to configure the OpenAI:

```JavaScript
/**
 * OpenAi module
 */
 
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: 'OpenAI Key',
});

const openai = new OpenAIApi(configuration);
```

And next, there is the process to ask for a completion or guess; As the following dictates:

```JavaScript
const response = await openai.createCompletion("engine", {
	prompt: "Prompt",
	temperature: temperature,
	max_tokens: max_tokens,
	top_p: top_p,
	frequency_penalty: frequency_penalty,
	presence_penalty: presence_penalty,
});
```

The engine is for the user to select. The parameters that are used to dictate how the responses of the bot are going to be.

## ARCHITECTURE OF THE PROJECT

The architecture of the project is the following:

```
sciotra-project/
├── LICENSE
├── README.md
├── index.js
├── lib/
│	├── api.js
│	├── oapi-impl.js
│	├── openai-impl.js
│	└── routes/
│		└── routes.js
├── package-lock.json
└── package.json


```

Now let's describe what is shown here.

* `LICENSE`: Is the document containing the license of this code. It covers the code of use of this repository.
* `README.md`: Is this document. Explanatory and brief.
* `index.js`: This is the main document, the one containing the instructions of binding the ports, etc.
* `lib/`: Is the directory containing all the important and self-made code.
* `api.js`: Is all of the definition of the express-js api.
* `oapi-impl.js`: Is the file that defines the implementation of the OpenAPI standard, the Swagger platform. A tool to generate documentation and interface to our API.
* `routes/`: Allocates the files related to creating route definitions for APIs.
* `routes.js`: File where the API routes are defined.
* `openapi-impl.js`: File to allocate the OpenAI definition.