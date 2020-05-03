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
  transactionTableHeaders: { text: string, value: string }[];
  areaCodeTableHeaders: { text: string, value: string }[];
}

class SummaryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      month: 1,
      year: 2020,
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

  render() {
    const { transactionTableHeaders, areaCodeTableHeaders, showModal, month, year } = this.state;
    const { expensiveMonthlyRendTransaction } = this.props;

    const monthList: { key: string, value: number }[] = [
      { key: '1월', value: 1 },
      { key: '2월', value: 2 },
      { key: '3월', value: 3 },
      { key: '4월', value: 4 },
      { key: '5월', value: 5 },
      { key: '6월', value: 6 },
      { key: '7월', value: 7 },
      { key: '8월', value: 8 },
      { key: '9월', value: 9 },
      { key: '10월', value: 10 },
      { key: '11월', value: 11 },
      { key: '12월', value: 12 },
    ]

    const yearList: { key: string, value: number }[] = [
      { key: '2015년', value: 2015 },
      { key: '2016년', value: 2016 },
      { key: '2017년', value: 2017 },
      { key: '2018년', value: 2018 },
      { key: '2019년', value: 2019 },
      { key: '2020년', value: 2020 },
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
