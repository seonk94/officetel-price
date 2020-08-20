import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { CursorSpan } from '@/src/style/common';
import { Typing } from '@/src/utills/typing';
import { IAgify, IGenderize, INationalize } from '@/src/types/api';

interface ResultTextListProps {
  age?: IAgify;
  gender?: IGenderize;
  nation?: INationalize;
}

const FormRow = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.mainTextColor};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 16px;
`

function ResultTextList({ age, gender, nation }: ResultTextListProps) {

  const ageRef: React.RefObject<HTMLSpanElement> = React.createRef();
  const genderRef: React.RefObject<HTMLSpanElement> = React.createRef();
  const nationRef: React.RefObject<HTMLSpanElement> = React.createRef();

  useEffect(() => {
    if (age && ageRef.current) {
      new Typing(ageRef, `나이 : ${age.age}`).typing();
    }
  }, [age, ageRef])

  useEffect(() => {
    if (gender && genderRef.current) {
      new Typing(genderRef, `성별 : ${gender.gender}`).typing();
    }
  }, [gender, genderRef])

  useEffect(() => {
    if (nation && nationRef.current) {
      new Typing(nationRef, `국가 : ${nation.country.map(c => c.country_id).join(' or ')}`).typing();
    }
  }, [nation, nationRef])

  return (
    <Fragment>
      <FormRow>
        <span ref={ageRef} />
        <CursorSpan />
      </FormRow>
      <FormRow>
        <span ref={genderRef} />
        <CursorSpan />
      </FormRow>
      <FormRow>
        <span ref={nationRef} />
        <CursorSpan />
      </FormRow>
    </Fragment>
  )
}
export default ResultTextList;
