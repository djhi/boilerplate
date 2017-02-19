.PHONY: build test help
.DEFAULT_GOAL := help

NODE_ENV ?= development
DATABASE_NAME ?= database

help:
	grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Installs npm dependencies for the api, and frontend apps
	$(MAKE) -C api install
	$(MAKE) -C frontend install

dev: ## Runs the development environment
	docker-compose up

storybook: ## Starts the storybook app
	$(MAKE) -C frontend storybook

test: ## Executes all tests for API and frontend
	$(MAKE) -C api test
	$(MAKE) -C frontend test

# Database
# ==============================================================================
database-shell: ## Access the database shell
	docker-compose exec database psql -U postgres database

create-database: ## Create the database
	docker-compose exec server make create-database

migrate-database: ## Migrate the database
	docker-compose exec server make migrate-database

revert-last-migration: ## Revert the last database migration
	docker-compose exec server make revert-last-migration

create-migration: ## Create a new database migration
	docker-compose exec server make create-migration

reset-migrations: ## Reset the database
	docker-compose exec server make reset-migrations

reset-database: ## Reset the database and run all migrations
	docker-compose exec server make reset-database
