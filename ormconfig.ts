

export const ormconfig = { 
    "type": "mysql",
    "host": "localhost", 
    "port": 3306, 
    "username": "root", 
    "password": "qq54916", 
    "database": "car", 
    "entities": ["dist/**/*.entity{.ts,.js}"], 
    "synchronize": false 
}
