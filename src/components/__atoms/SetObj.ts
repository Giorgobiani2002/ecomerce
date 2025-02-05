// store/useObjectStore.ts

import { create } from 'zustand';

// Define the type of the object you want to store
interface MyObject {
  name: string;
  id: number;
  description: string;
}

// Create a store with Zustand
interface MyObjectStore {
  myObject: MyObject | null;
  setMyObject: (object: MyObject) => void;
}

const useObjectStore = create<MyObjectStore>((set) => ({
  myObject: null, // Initial state is null
  setMyObject: (newObject: MyObject) => set({ myObject: newObject }), // Action to update the object
}));

export default useObjectStore;
