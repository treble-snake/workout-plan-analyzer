import {LocalStorageApi} from '../LocalStorageApi';

const UrlHandlers: Record<string, () => Promise<any>> = {
  '/plans': () => {
    return LocalStorageApi.listPlans();
  }
};

export const localStorageFetcher = (resource: string, init: any) => {
  console.debug('resource', resource);
  console.debug('init', init);

  const handler = UrlHandlers[resource];
  if (!handler) {
    return Promise.reject(`No handler for ${resource}`);
  }

  return handler();
};