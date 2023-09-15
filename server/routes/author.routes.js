const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/authors', AuthorController.createAuthor);     
    app.get('/authors', AuthorController.getAllAuthors);
    app.get('/authors/:id', AuthorController.getOneAuthor);
    app.delete('/authors/:id', AuthorController.deleteAnAuthor);
    app.patch('/authors/:id', AuthorController.updateAuthor);
}

