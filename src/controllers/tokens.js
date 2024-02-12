const Token = require("../models/token");
const { handleError, handleResponse } = require("../helpers/responseHandler");

const getAllTokens = async (req, res) => {
  try {
    const data = await Token.find();
    handleResponse({ res, data });
  } catch (error) {
    handleError({
      res,
      error,
    });
  }
};

const getToken = async (req, res) => {
  try {
    const _id = req.params.tokenId;
    const data = await Token.findById({ _id });
    if (!data) {
      handleError({
        res,
        statusCode: 404,
        err_msg: "No Token found",
      });
      return;
    }
    handleResponse({ res, data });
  } catch (error) {
    handleError({
      res,
      error,
    });
  }
};

const updateTokenDetails = async (req, res) => {
  try {
    const _id = req.params.tokenId;
    const data = await Token.findOneAndUpdate(
      { _id },
      { $set: req.body },
      { new: true }
    );
    if (!data) {
      handleError({
        res,
        statusCode: 404,
        err_msg: "No Token found",
      });
      return;
    }
    handleResponse({ res, data });
  } catch (error) {
    handleError({
      res,
      error,
    });
  }
};

module.exports = {
  getAllTokens,
  getToken,
  updateTokenDetails,
};
