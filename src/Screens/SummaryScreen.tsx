import * as React from 'react';
import { Grid } from '@material-ui/core';
import OfficetelInfoCard from '../components/Card/OfficetelInfoCard';
import SingleDataCard from '../components/Card/SingleDataCard';
import BasicTable from '../components/Table/BasicTable';
import { transactions, transactionsByAreaCode } from '../constants/example';
import './SummaryScreen.scss'
import BasicModal from '../components/Modal/BasicModal';

export interface Props {
    longRentCount : number,
    monthlyRentCount: number,
    expensiveMonthlyRendTransaction: OfficetelTransaction
}
interface State {
  showModal: boolean;
  transactionTableHeaders: {text: string, value: string}[];
  areaCodeTableHeaders: {text: string, value: string}[];
}

class SummaryScreen extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      showModal : false,
      transactionTableHeaders : [
        { text: '시군구', value: 'gu' },
        { text: '동', value: 'dong' },
        { text: '이름', value: 'housing_complex' },
        { text: '건축년도', value: 'building_year' },
        { text: '보증금', value: 'deposit' },
      ],
      areaCodeTableHeaders : [
        { text: '시군구', value: 'gu' },
        { text: '거래수', value: 'value' },
      ]
    }

    this.handleShowModal = this.handleShowModal.bind(this)
  }

  handleShowModal = (value : boolean) => {
    this.setState(state => ({
      showModal: value
    }))
  }

  render() {
    const { transactionTableHeaders, areaCodeTableHeaders, showModal } = this.state;
    const { expensiveMonthlyRendTransaction } = this.props;

    
      
    return (
      <Grid container spacing={3} justify="center" className="main-container">
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
          handleShow={this.handleShowModal}/>
      </Grid>
    )
  }
}

export default SummaryScreen;