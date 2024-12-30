const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./configs/db");
const cookieParser = require("cookie-parser");
const { express, app, server } = require("./configs/socket");

dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

server.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    connectDB();
});
