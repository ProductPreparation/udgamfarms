const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'ugf',
  password: process.env.DB_PASSWORD || 'admin',
  port: 5432,
});

const getAllQueries = (request, response) => 
{
  pool.query('SELECT * FROM online_queries ORDER BY arrival_date ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}
  const createOnlineQuery = (request, response) => 
  {
    const { arrival_date, departure_date,  no_of_adults, no_of_rooms} = request.body;
    if(arrival_date.length==0){
      console.log('invalid input');
      return response.status(201).send('invalid input');
    }
  
    pool.query(
      'INSERT INTO online_queries (arrival_date, departure_date,  no_of_adults, no_of_rooms, create_date_time) VALUES ($1, $2, $3, $4, current_timestamp) RETURNING *',
      [arrival_date, departure_date, no_of_adults, no_of_rooms],
      (error, results) => {
        if (error) {
          console.log(error);
          return response.status(400).send(`Bad Request: ${results.rows[0].arrival_date}`);
        }
        response.status(201).send(`User added with date: ${results.rows[0].arrival_date}`);
      }
    );
  };
module.exports = {
  getAllQueries,
  createOnlineQuery,
};