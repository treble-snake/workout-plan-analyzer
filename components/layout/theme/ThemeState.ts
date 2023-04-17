import {atom} from 'recoil';
import {PlanStorage} from '../../../api-lib';
import {Theme} from './types';

export const themeState = atom<Theme | null>({
  key: 'themeState',
  default: null,
  effects: [
    ({onSet}) => {
      onSet((theme: Theme | null) => {
        if (theme !== null) {
          PlanStorage.saveTheme(theme).catch(console.error);
        }
      });
    }
  ]
});