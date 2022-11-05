import Joi from 'joi';
import {ValidationSchema} from './../../core/interfaces/validationSchema'
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = Joi.extend(joiPasswordExtendCore);

const createUserValidation: ValidationSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: joiPassword
      .string()
      .min(8)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .minOfSpecialCharacters(1)
      .noWhiteSpaces()
      .required()
  }),
};

export default createUserValidation;
