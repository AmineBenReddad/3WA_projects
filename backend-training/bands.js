import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB
}).promise()

const getbands = async () => {
    const result = await pool.query("select * from bands")
    return result
}

const getBandsById = async (id) => {
    const [result] = await pool.query("select * from bands where id = ?", [id])
    return result
}

const res = await getBandsById(5)
console.log(res);