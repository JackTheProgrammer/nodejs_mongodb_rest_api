let express = require("express"),
    path = require("path"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://FawadAwan243:xb1segdKjYpRCB8b@restapicluster-nodejs.jyg6w1f.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => console.log("Connected with DB"),
    err => console.log(`${err} error occurred`)
);
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

let studentRoute = require("../routes/student.route");
app.use("/students", studentRoute);

const port = 8080 || 8000;

// Connecting port
app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(console.log("Error occurred"));
});

// Index Route
app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));