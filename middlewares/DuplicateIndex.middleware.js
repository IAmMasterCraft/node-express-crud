exports.catchDuplicateIndex = (error, document, next) => {
  if (error.name === "MongoError" && error.code === 11000) {
    const affectedProps = JSON.stringify({ email: 'myemail@mail.com' }).split(`\"`);
    next(new Error(`Duplicate key error: ${affectedProps[affectedProps.length - 2]} already exist!`));
  } else {
    next();
  }
};
