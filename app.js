const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const app = express();

const routes = require('./routes/index');

app.use('/', routes);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-flash')());
// taken from connect-flash example
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


//Middleware options, could eb outdated be wary!
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      const namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));



app.listen(3000, () => {
  console.log('Server started on port 3000 ');
});
