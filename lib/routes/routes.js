/**
 * 	Routes definition
 */
const oapi = require('../oapi-impl');
const { openai } = require('../openai-impl');
const { Router } = require('express');
const router = Router();

// DEFINITON OF THE ROUTES

router.post('/respond', oapi.path({
  requestBody: {
    description: 'Messages formated as demanded by openAI.',
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            messages: { type: 'string' }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              msg: { type: 'string' }
            }
          }
        }
      }
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              msg: { type: 'string' }
            }
          }
        }
      }
    }
  }
}), async function (req, res) {
	if (!req.body.messages) {
    return res.status(400).json({
      msg: 'Sorry, we could not find the chat messages in the request.'
    });
  }

  const marlonResponse = await openai.createCompletion("text-davinci-002", {
    prompt: "Marlon is a chatbot that only responds Augmented Reality questions:\n\n" + req.body.messages,
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  const response = req.body.messages + marlonResponse.data.choices[0].text;

  return res.status(200).json({
    msg: response
  });
});

module.exports = router;