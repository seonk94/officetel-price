import React, { Fragment } from 'react';
import { IAgify, IGenderize, INationalize } from '../../types/api';
import { LoadingStatus } from '../../types';
import Loader from '../Loader';

interface ResultFormProps {
  age?: IAgify;
  gender?: IGenderize;
  nation?: INationalize;
  loadingStatus: LoadingStatus;
}

function ResultForm({ age, gender, nation, loadingStatus }: ResultFormProps) {

  return (
    <div>
      {loadingStatus === 'searching' ? <Loader /> : undefined}
      {
        loadingStatus === 'searched'
          ? <Fragment>
            <h3>{age ? age.age : ''}</h3>
            <h3>{gender ? gender.gender : ''}</h3>
            <h3>{nation ? nation.country.map(c => c.country_id) : ''}</h3>
          </Fragment>
          : undefined
      }
    </div>
  )
}

export default ResultForm;
