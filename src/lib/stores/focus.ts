import { writable } from "svelte/store";

export interface FocusState {
  focused: string,
}

const focusState: FocusState = {
  focused: '',
}

export interface FocusManagerContext { 
  focused: string,
  subscribe: () => void,
  focus: (val: string | null) => void
}

export function createFocusManager() {
  const { subscribe, update } = writable<FocusState>(focusState);
  return {
		subscribe,
    focus: (id: string) => {
      update((state) => ({
        ...state,
        focused: id
      }));
    }
  }
}
