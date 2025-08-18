import storeConfig from '@config/stores-config.json';

export interface StoreConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  doctor: {
    name: string;
    title: string;
    bio: string;
  };
  bookingUrl: string;
  googleMapsUrl: string;
  vercelProjectName: string;
}

export interface StoresConfig {
  stores: {
    [key: string]: StoreConfig;
  };
  currentStore: string;
}

const config = storeConfig as StoresConfig;

export const getCurrentStore = (): StoreConfig => {
  return config.stores[config.currentStore];
};

export const getStore = (storeKey: string): StoreConfig => {
  return config.stores[storeKey];
};

export const getAllStores = (): { [key: string]: StoreConfig } => {
  return config.stores;
};

export const getCurrentStoreKey = (): string => {
  return config.currentStore;
};
