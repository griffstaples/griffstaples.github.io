import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Returns null during SSR and hydration, then the real document on the client
export const useServerSafeDocument = () =>
  useSyncExternalStore<Document | null>(
    subscribe,
    () => document,
    () => null
  );
