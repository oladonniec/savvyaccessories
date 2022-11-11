function Validation(values) {
  let errors = {};

  if (!values.fullname) {
    errors.fullname = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)
  ) {
    errors.email = "Email is invalid";
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = "Email do not match";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password do not match";
  }
  return errors;
}

export default Validation;
