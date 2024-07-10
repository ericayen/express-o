const { db } = require('@vercel/postgres');
const {
    coffee,
    comments,
    questions,
    responses,
} = require('../app/lib/data.ts');