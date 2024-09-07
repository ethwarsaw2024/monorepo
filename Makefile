# Makefile for PostgREST project setup

# Variables
POSTGREST_CONF = db/postgrest.conf
MIGRATION_FILE = db/migration.sql
DB_URI = $(shell grep db-uri $(POSTGREST_CONF) | cut -d '"' -f 2)

# Default target
all: setup

# Setup target
setup: migrate

migrate:
	@echo "Running database migration..."
	@if [ -f $(MIGRATION_FILE) ]; then \
		psql $(DB_URI) -f $(MIGRATION_FILE); \
		echo "Migration completed."; \
	else \
		echo "Migration file not found. Skipping migration."; \
	fi
	@echo "Setup complete."

# New command to run PostgREST
run:
	@echo "Starting PostgREST..."
	@if [ -f $(POSTGREST_CONF) ]; then \
		postgrest $(POSTGREST_CONF); \
	else \
		echo "Error: PostgREST configuration file not found."; \
		exit 1; \
	fi

.PHONY: all setup migrate run