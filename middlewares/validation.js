const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

//item is created
const createclothingvalidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),

    weather: Joi.string().valid("hot", "warm", "cold").required(),

    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),
  }),
});

const createuservalidation = celebrate;
body: Joi.object().keys({
  name: Joi.string().required().min(2).max(30).messages({
    "string.min": 'The minimum length of the "name" field is 2',
    "string.max": 'The maximum length of the "name" field is 30',
    "string.empty": 'The "name" field must be filled in',
  }),

  password: Joi.string().required().min(8).messages({
    "string.min": "Password requires at least 8 characters",
    "string.empty": 'The "password" field must be filled in',
  }),
});

const userIdvalidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24).messages({
      "string.empty": "The 'id' field must be filled in",
      "string.length": "The 'id' field must have a length of 24",
    }),
  }),
});

const clothingIdvalidation = celebrate({
  params: Joi.object().keys({
    clothingId: Joi.string().required().hex().length(24).messages({
      "string.empty": "The 'id' field must be filled in",
      "string.length": "The 'id' field must have a length of 24",
    }),
  }),
});

module.exports = {
  createclothingvalidation,
  createuservalidation,
  userIdvalidation,
  clothingIdvalidation,
};
