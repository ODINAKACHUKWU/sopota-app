import validator from "validator";
import isEmpty from "is-empty";

const ticketValidator = (data) => {
  const { subject, description, department } = data;
  const errors = {};

  const trimmedSubject = subject.trim();
  const trimmedDescription = description.trim();
  const trimmedDepartment = department.trim();

  if (validator.isEmpty(trimmedSubject)) errors.subject = "Subject is required";

  if (validator.isEmpty(trimmedDescription))
    errors.description = "Description is required";

  if (validator.isEmpty(trimmedDepartment))
    errors.department = "Department is required";

  return { errors, isValid: isEmpty(errors) };
};

export default ticketValidator;
