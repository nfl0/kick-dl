#!/usr/bin/env node

import { initialAction } from '../src/index.js';
import { Command } from 'commander';

const program = new Command();

program
	.name('kick-dl')
	.version('1.0.0')
	.description(
		'A CLI tool for easily downloading VODs and Clips from Kick.com'
	);

program.action(async () => {
	await initialAction();
});

program
	.command('start')
	.description('Start Kick-dl to download multimedia content from Kick.com')
	.action(async () => {
		await initialAction();
	});

program.parse(process.argv);
