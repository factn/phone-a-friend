const mapResponseError = (err: Error) => {
  console.log(err);
  throw err;
};

export { mapResponseError };
