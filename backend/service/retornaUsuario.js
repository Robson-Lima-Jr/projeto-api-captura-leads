import pool from "./conexao.js";

export async function retornaUsuarios() {
    const conexao = await pool.getConnection();
    const query_TB = await conexao.query(`
            SELECT * FROM usuarios
        `);


    const retornaQuery = query_TB[0];
    conexao.release();

    return retornaQuery;
}