#!/bin/bash
start_dev:
	@docker compose up
build_prod:
	@docker build --target production_stage -t production_image:prod .