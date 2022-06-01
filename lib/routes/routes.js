/**
 * 	Routes definition
 */
const oapi = require('../oapi-impl');
const { Router } = require('express');
const router = Router();

// DEFINITON OF THE ROUTES

router.get('/', oapi.path({
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
    }
  }
}), (req, res) => {
	res.json({
		msg: 'Bitchers Fucker'
	});
});

module.exports = router;