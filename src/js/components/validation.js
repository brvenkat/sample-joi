const joiBase = require('@hapi/joi')
const joiDate = require('@hapi/joi-date')
import moment from 'moment'

const joi = joiBase.extend(joiDate).defaults(schema =>
  schema.options({
    abortEarly: false,
    allowUnknown: false,
    convert: false
  })
  )

const DATE_FORMAT = 'DD/MM/YYYY'
const minDate = moment('1901-01-01')

function getTodayInFormat() {
  return moment().startOf('day').toDate();
}

const dateEntered = joi
  .date()
  .format(DATE_FORMAT)
  .min(minDate.toDate())
  .less(getTodayInFormat())
  .required()
  .raw()
  .messages({
    'date.less': 'must be less than the specified date'
  })
  .options({ convert: true })

export const schema = joi.object({
  dateEntered
})

function validateJoi(fields, schema) {
  const result = schema.validate(fields, options)
}

// const Joi = require('@hapi/joi');
// export const schema = Joi.object({
//   username: Joi.string()
//   .alphanum()
//   .min(3)
//   .max(30)
//   .required(),
// })