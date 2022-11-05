import Joi from 'joi';
import {ValidationSchema} from '../../core/interfaces/validationSchema'

const createImageValidation: ValidationSchema = {
  body: Joi.object().keys({
    uri: Joi.string().required(),
  }),
};

export default createImageValidation;
