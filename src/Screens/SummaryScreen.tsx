import * as React from 'react';
import { Grid, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import OfficetelInfoCard from '../components/Card/OfficetelInfoCard';
import SingleDataCard from '../components/Card/SingleDataCard';
import BasicTable from '../components/Table/BasicTable';
import { transactions, transactionsByAreaCode } from '../constants/example';
import './SummaryScreen.scss'
import BasicModal from '../components/Modal/BasicModal';
import SelectForm from '../components/Input/SelectForm';

export interface Props {
  longRentCount: number,
  monthlyRentCount: number,
  expensiveMonthlyRendTransaction: OfficetelTransaction
}
interface State {
  showModal: boolean;
  month: number;
  year: number;
  areaCode: number;
  transactionTableHeaders: { text: string, value: string }[];
  areaCodeTableHeaders: { text: string, value: string }[];
}

class SummaryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const today = new Date();

    let currentYear = today.getFullYear();
    let previousMonth = today.getMonth();

    if (previousMonth === 1) {
      previousMonth = 12;
      currentYear = currentYear - 1
    }

    this.state = {
      showModal: false,
      month: previousMonth,
      year: currentYear,
      areaCode: 11110,
      transactionTableHeaders: [
        { text: '시군구', value: 'gu' },
        { text: '동', value: 'dong' },
        { text: '이름', value: 'housing_complex' },
        { text: '건축년도', value: 'building_year' },
        { text: '보증금', value: 'deposit' },
      ],
      areaCodeTableHeaders: [
        { text: '시군구', value: 'gu' },
        { text: '거래수', value: 'value' },
      ]
    }

    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  handleShowModal = (value: boolean) => {
    this.setState({
      showModal: value
    })
  }

  handleMonthChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({
      month: e.target.value as number
    })
  }

  handleYearChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({
      year: e.target.value as number
    })
  }

  handleAreaCodeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({
      areaCode: e.target.value as number
    })
  }

  render() {
    const { transactionTableHeaders, areaCodeTableHeaders, showModal, month, year, areaCode } = this.state;
    const { expensiveMonthlyRendTransaction } = this.props;

    const monthList: { text: string, value: number }[] = [
      { text: '1월', value: 1 },
      { text: '2월', value: 2 },
      { text: '3월', value: 3 },
      { text: '4월', value: 4 },
      { text: '5월', value: 5 },
      { text: '6월', value: 6 },
      { text: '7월', value: 7 },
      { text: '8월', value: 8 },
      { text: '9월', value: 9 },
      { text: '10월', value: 10 },
      { text: '11월', value: 11 },
      { text: '12월', value: 12 },
    ]

    const yearList: { text: string, value: number }[] = [
      { text: '2015년', value: 2015 },
      { text: '2016년', value: 2016 },
      { text: '2017년', value: 2017 },
      { text: '2018년', value: 2018 },
      { text: '2019년', value: 2019 },
      { text: '2020년', value: 2020 },
    ]

    const guList: { text: string, value: number }[] = [
      { text: '종로구', value: 11110 },
      { text: '중구', value: 11140 },
      { text: '용산구', value: 11170 },
      { text: '성동구', value: 11200 },
      { text: '광진구', value: 11215 },
      { text: '동대문구', value: 11230 },
      { text: '중랑구', value: 11260 },
      { text: '성북구', value: 11290 },
      { text: '강북구', value: 11305 },
      { text: '도봉구', value: 11320 },
      { text: '노원구', value: 11350 },
      { text: '은평구', value: 11380 },
      { text: '서대문구', value: 11410 },
      { text: '마포구', value: 11440 },
      { text: '양천구', value: 11470 },
      { text: '강서구', value: 11500 },
      { text: '구로구', value: 11530 },
      { text: '금천구', value: 11545 },
      { text: '영등포구', value: 11560 },
      { text: '동작구', value: 11590 },
      { text: '관악구', value: 11620 },
      { text: '서초구', value: 11650 },
      { text: '강남구', value: 11680 },
      { text: '송파구', value: 11710 },
      { text: '강동구', value: 11740 },
    ]

    return (
      <Grid container spacing={3} justify="center" className="main-container">
        <Grid container spacing={3} className="select-container">
          <Grid item>
            <SelectForm
              value={year}
              items={yearList}
              selectLabel="Year"
              handleSelectChange={this.handleYearChange}
            />
          </Grid>
          <Grid item>
            <SelectForm
              value={month}
              items={monthList}
              selectLabel="Month"
              handleSelectChange={this.handleMonthChange}
            />
          </Grid>
          <Grid item>
            <SelectForm
              value={areaCode}
              items={guList}
              selectLabel="시군구"
              handleSelectChange={this.handleAreaCodeChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item>
            <SingleDataCard title='월세 거래 수' value='4,952' compareValue='-412'></SingleDataCard>
          </Grid>
          <Grid item>
            <SingleDataCard title='전세 거래 수' value='2,132' compareValue='-219'></SingleDataCard>
          </Grid>
          <Grid item>
            <SingleDataCard title='평균 월세' value='45.00' compareValue='+5'></SingleDataCard>
          </Grid>
          <Grid item>
            <SingleDataCard title='평균 전세 보증금' value='10,000' compareValue='+500'></SingleDataCard>
          </Grid>
          <Grid item>
            <SingleDataCard title='월세 평균 면적' value='23.19m²' compareValue='+2.19m²'></SingleDataCard>
          </Grid>
          <Grid item>
            <SingleDataCard title='평균 전세 면적' value='73.92m²' compareValue='+5.32m²'></SingleDataCard>
          </Grid>
        </Grid>
        <Grid item>
          <OfficetelInfoCard
            title='비싼 월세 오피스텔'
            transaction={expensiveMonthlyRendTransaction}
            handleShowModal={this.handleShowModal}
          />
        </Grid>
        <Grid item>
          <OfficetelInfoCard
            title='비싼 전세 오피스텔'
            transaction={expensiveMonthlyRendTransaction}
            handleShowModal={this.handleShowModal}
          />
        </Grid>
        <Grid item>
          <OfficetelInfoCard
            title='거래량 TOP 오피스텔'
            transaction={expensiveMonthlyRendTransaction}
            handleShowModal={this.handleShowModal}
          />
        </Grid>
        <Grid item>
          <BasicTable
            spacingClass='basic-table-card-2'
            headers={transactionTableHeaders}
            datas={transactions}
          ></BasicTable>
        </Grid>
        <Grid item>
          <BasicTable
            spacingClass='basic-table-card-1'
            headers={areaCodeTableHeaders}
            datas={transactionsByAreaCode}
          ></BasicTable>
        </Grid>
        <BasicModal
          show={showModal}
          handleShow={this.handleShowModal} />
      </Grid>
    )
  }
}

export default SummaryScreen;
