import config from "./app/config";
import app from "./app"

import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(config.DATABASE_CONNECTION as string);
        app.listen(config.PORT, () => {
            console.log(`Example app listening on port ${config.PORT}`)
        })
    } catch (error) {
        console.log(error);

    }
}

