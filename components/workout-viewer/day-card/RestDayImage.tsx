import Image from 'next/legacy/image';
import SleepingCat from './resources/sleep_cat_icon.png';

export const RestDayImage = () => {
  return <div style={{textAlign: 'center'}}>
    <Image src={SleepingCat} alt={'Rest'} />
  </div>;
};