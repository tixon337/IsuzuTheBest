const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
// const session = require("express-session");
// const FileStore = require("session-file-store")(session);
// const { cookiesCleaner } = require("./auth");
// const dbConnection = require("./DataBase/Database");
// app.use(morgan("dev"));
// const useMiddleware = require("./middleware");
// const adminRouter = require("./routes/admin");
// const anotherCarRouter = require("./routes/anothercar")
// const configuratorRouter = require("./routes/configurator")
const adminRouter = require("./routes/admin");
const anothercarRouter = require("./routes/anothercar");
const configuratorRouter = require("./routes/configurator");
const indexRouter = require("./routes/index");
const optionsRouter = require("./routes/options");

// const optionsRouter = require("./routes/options")
// const useErrorHandlers = require("./middleware/error-handlers");

const app = express();

// Body POST запросов.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Подключаем статику
app.use(express.static(path.join(__dirname, '..', "public")));

// Подключаем views(hbs)
app.set("view engine", "hbs");

// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/admin", adminRouter);
app.use("/anothercar", anothercarRouter);
app.use("/configurator", configuratorRouter);
app.use("/", indexRouter);
app.use("/options", optionsRouter);


// useErrorHandlers(app);


  // initialize express-session to allow us track the logged-in user across sessions.
  // app.use(
  //   session({
  //     store: new FileStore(),
  //     key: "user_sid",
  //     secret: "anything here",
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       expires: 600000
  //     }
  //   })
  // );
  // app.use(cookiesCleaner);


  app.listen(3000, () => console.log('run on 3000'));
