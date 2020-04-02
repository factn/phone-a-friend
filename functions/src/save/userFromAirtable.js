async function saveUserFromAirtable(req, res) {
  const { body } = req;
  console.log(body);
  return res.status(200).send();
}

module.exports = saveUserFromAirtable;
