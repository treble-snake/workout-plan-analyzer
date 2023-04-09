import {PlanStorage} from '../index';

export const localStorageFetcher = (resource: string, init: any) => {
  console.debug('localStorageFetcher: fetching resource', resource, 'with params', init);

  if (resource === '/plans') {
    return PlanStorage.listPlans();
  }

  if (resource === '/draft') {
    return PlanStorage.loadDraft();
  }

  if (resource.startsWith('/plans/')) {
    const id = resource.split('/')[2];
    return PlanStorage.getPlan(id);
  }

  return Promise.reject(`No handler for ${resource}`);
};