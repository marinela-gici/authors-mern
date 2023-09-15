const Author = require("../models/author.model");

module.exports = {
  createAuthor: (request, response) => {
    const { name } = request.body;
    Author.create({
      name: name,
    })
      .then((name) => response.json(name))
      .catch((err) => response.status(400).json(err));
  },

  getAllAuthors: (request, response) => {
    Author.find({})
      .then((authors) => {
        console.log(authors);
        response.json(authors);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  getOneAuthor: (request, response) => {
    Author.findOne({ _id: request.params.id })
      .then((author) => {
        console.log(author);
        response.json(author);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  deleteAnAuthor: (request, response) => {
    Author.deleteOne({ _id: request.params.id })
      .then((deleteAuthor) => response.json(deleteAuthor))
      .catch((err) => response.json(err));
  },

  updateAuthor: (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
    })
      .then((updatedAuthor) => response.json(updatedAuthor))
      .catch((err) => response.json(err));
  },
};
