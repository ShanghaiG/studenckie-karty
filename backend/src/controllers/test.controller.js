/** @format */

const { body, param, validationResult } = require("express-validator");
const { ValidatorException } = require("@exceptions");

const { testMethod } = require("@services/test");

module.exports = {
  validators: {},

  /**
   *  @api {get} api/v1/companies/:company_id/company-data Get an company's data
   *  @apiName ReadCompanyData
   *  @apiGroup Companies/CompanyData
   *  @apiVersion 1.0.0
   *
   *  @apiSuccess (Success 200) {array} company-data entries
   */
  index: async (req, res) => {
    // const validationErrors = validationResult(req);
    // if (!validationErrors.isEmpty()) {
    //   throw new ValidatorException(validationErrors);
    // }

    const payload = testMethod();
    res.status(200).json(payload);
  },
};
