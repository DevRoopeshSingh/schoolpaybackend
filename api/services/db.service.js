const database = require('../../config/database');

const dbService = (environment, migrate) => {
  
  const authenticateDB = () => database.authenticate();

  const successfulDBStart = () => (
    console.info('connection to the database has been established successfully')
  );

  const errorDBStart = (err) => (
    console.info('unable to connect to the database:', err)
  );

  const startDB = async () => {
    try {
      await authenticateDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
    }
  };

  const start = async () => {
    let startDataBase = startDB();
    await startDataBase;
  };

  return {
    start,
  };
};

module.exports = dbService;
