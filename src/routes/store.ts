import { writable } from 'svelte/store';

export const theme = writable<'void' | 'light'>('void');