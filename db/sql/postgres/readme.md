## POSTGRES SQL

### intro
```sql
# login
sudo su postgres
psql

CREATE DATABASE db_name;
CREATE USER app WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_name TO app;
```

### shortcut
```sql
\l              # show all dbs
\du             # show all users
\dt             # show all tables
\c db_name      # switch/connect db
```

### db
```sql
CREATE DATABASE db_name;
DROP DATABASE app;
DROP DATABASE app WITH (FOURCE);
```

### table
```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  time timestamp with time zone NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id)
);

DROP TABLE users;
ALTER TABLE users
  ADD COLUMN phone VARCHAR(255) NOT NULL,
  ADD COLUMN password VARCHAR(255) NOT NULL;
```
