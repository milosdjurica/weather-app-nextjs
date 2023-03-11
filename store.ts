import { create } from "zustand";
import { ResponseType } from "./typings";

type State = {
  response: ResponseType | null;
};

type Action = {
  updateResponse: (response: State["response"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useMyStore = create<State & Action>((set) => ({
  response: null,
  updateResponse: (response) => set(() => ({ response: response })),
}));
