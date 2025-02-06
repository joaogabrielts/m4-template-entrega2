import { app } from "./app";

const port = 3046;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})