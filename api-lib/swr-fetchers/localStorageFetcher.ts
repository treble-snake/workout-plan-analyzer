import {LocalStorageApi} from '../LocalStorageApi';

const planListHandler = () => {
  return LocalStorageApi.listPlans();
};

const planHandler = (id: string) => {
  return LocalStorageApi.getPlan(id);
}

export const localStorageFetcher = (resource: string, init: any) => {
  console.info('localStorageFetcher: fetching resource', resource, 'with params', init);

  if (resource === '/plans') {
    return planListHandler();
  }

  if (resource.startsWith('/plans/')) {
    const id = resource.split('/')[2];
    return planHandler(id);
  }

  return Promise.reject(`No handler for ${resource}`);
};