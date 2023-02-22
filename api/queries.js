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
  const { user, password} = request.body;
  // console.log(user+ " "+password);
  // console.log(process.env.API_PASSWRD);
  if(user === 'udgam' && password === process.env.API_PASSWRD){
    pool.query('SELECT * FROM online_queries ORDER BY arrival_date ASC', (error, results) => 
    {
      if (error) {
        console.log(error);
        // console.log(process.env.DB_PASSWORD);
        return response.status(500).send('Error');
      }
      
    });
    response.status(200).json(results.rows);
  }
  return response.status(401).send('Unauthorized');
}

const createOnlineQuery = (request, response) => 
  {
    console.log(request.body);
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
          return response.status(400).send('Bad Request');
        }
        response.status(201).send(`User added with date: ${results.rows[0].arrival_date}`);
      }
    );
  };
module.exports = {
  getAllQueries,
  createOnlineQuery,
};