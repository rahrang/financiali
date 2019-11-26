import * as Joi from '@hapi/joi';

const transactionCSVSchema = Joi.object().keys({
  csv: Joi.array().items(
    Joi.object({
      date: Joi.date()
        .iso()
        .required(),
      vendor: Joi.string().required(),
      amount: Joi.number()
        .precision(2)
        .required(),
      category: Joi.string().required(),
      subcategories: Joi.array()
        .items(Joi.string())
        .length(2)
        .single(),
      tags: Joi.array()
        .items(Joi.string())
        .length(5)
        .single(),
      // ate pizza with kimi
      detail: Joi.string(),
      // Cash, Credit Card, Venmo, etc.
      paymentMethod: Joi.string(),
      // credit card name -- Chase Freedom Unlimited
      paymentName: Joi.string(),
    })
  ),
});

// take in CSV of transactions

// validate transactions

// store transactions in database
