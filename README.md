# FuelRESTAPITest
Test REST API for fuel data using fake data stored in an SQLite database.
A sample .env is included. Default is port 3000 and db file located in ./db/ directory with database.db as the filename. 

# Installation
Use npm install

# Start
npm start

## Endpoints:

### Latest Fuel Data
- GET /api/1/latestFuel
- Responds with single latest entry with time, average and lowest (lowest 5)

### All Fuel Data
- GET /api/1/all
- Responds with all entries with time, average and lowest (lowest 5)