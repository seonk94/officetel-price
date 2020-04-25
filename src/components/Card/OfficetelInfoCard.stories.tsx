import React from 'react';
import OfficetelInfoCard from './OfficetelInfoCard';

export default {
  component: OfficetelInfoCard,
  title: 'OfficetelInfoCard'
};

export const officetelInfoCard = () => 
    <OfficetelInfoCard 
        title='비교카드' 
        transaction={
            {
                area: 63.81,
                area_code: '11100',
                building_year: 2005,
                day: 30,
                deposit: '18,000',
                dong: '홍지동',
                floor: 4,
                gu: '종로구',
                housing_complex: '세검정아트오피스텔',
                month: 12,
                monthly_rent: 0,
                year: 2015,
                zip_number: '104-21',
            }
        }/>;

officetelInfoCard.story = {
  name: 'Default'
};