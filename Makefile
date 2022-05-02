SHELL := /bin/bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules
SITE_PATH := mysite

help:
	@printf "Usage: make [target] [VARIABLE=value]\nTargets:\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

hooks: ## Setup pre commit.
	@pre-commit install
	@pre-commit gc

validate: ## Validate files with pre-commit hooks
	@pre-commit run --all-files

deploy: ## Deploy github pages
	@npm run deploy

open: ## Open in browser
	@open "https://ivankatliarchuk.github.io/"

start: ## Start Server
	@hugo server -D -s $(SITE_PATH)

generate: ## Generate site
	@hugo -D -d ../docs -s $(SITE_PATH)

submodules: ## Update submodules
	@git submodule update --remote --recursive

.PHONY: help validate hooks deploy open
