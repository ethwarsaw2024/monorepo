-- Create users table
CREATE TABLE
    IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        encrypted_key TEXT NOT NULL
    );

-- Create index on email column
CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);