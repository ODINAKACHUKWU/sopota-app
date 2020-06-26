import validator from "validator";
import isEmpty from "is-empty";

const commentValidator = (data) => {
  const { comment } = data;
  const errors = {};

  const trimmedComment = comment.trim();

  if (validator.isEmpty(trimmedComment)) errors.comment = "Comment is required";

  return { errors, isValid: isEmpty(errors) };
};

export default commentValidator;
