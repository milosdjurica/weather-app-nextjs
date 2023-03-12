import { create } from "zustand";
import { ResponseType } from "./typings";

type State = {
  response: ResponseType | null;
  //! daySelected is number because if i pass in data for day
  //! when user changes city data doesn't update, this way it will update
  daySelected: number;
  hourSelected: number;
};

type Action = {
  updateResponse: (response: State["response"]) => void;
  updateDaySelected: (daySelected: State["daySelected"]) => void;
  updateHourSelected: (hourSelected: State["hourSelected"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useMyStore = create<State & Action>((set) => ({
  response: null,
  updateResponse: (response) => set(() => ({ response: response })),
  daySelected: 0,
  updateDaySelected: (daySelected) => set(() => ({ daySelected: daySelected })),
  hourSelected: 0,
  updateHourSelected: (hourSelected) =>
    set(() => ({ hourSelected: hourSelected })),
}));
