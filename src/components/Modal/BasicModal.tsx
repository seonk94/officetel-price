import * as React from 'react';
import Card from '@material-ui/core/Card';
import './BasicModal.scss'
import { Modal, CardContent, Grid, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import OfficetelInfoCard from '../Card/OfficetelInfoCard';
import BasicTable from '../Table/BasicTable';
import { transactions } from '../../constants/example';
import BasicSingleLineChart from '../Chart/BasicLineChart';
import ChartCard from '../Card/ChartCard';


export interface Props {
  show: boolean;
  handleShow: (value: boolean) => void;
}
const tempData = {
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
const tempHeaders: { text: string, value: string }[] = [
  { text: '거래년도', value: 'year' },
  { text: '거래일', value: 'day' },
  { text: '보증금', value: 'deposit' },
]
function BasicModal({ show, handleShow }: Props) {

  const { kakao }: any = window;
  const clickCloseButton = () => handleShow(false)
  const emptyFunction = () => { }

  const dataKeys: string[] = ['pv', 'uv', 'amt']
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]


  setTimeout(() => {
    console.log(kakao)
    kakao.maps.load(() => {
      const mapContainer = document.getElementById('kakaomap');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      }

      const map = new kakao.maps.Map(mapContainer, options);

      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch('홍지동104-21', (res: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(res[0].y, res[0].x);

          // 참고 https://webkimsora.tistory.com/60
          // const marker = new kakao.maps.Marker({
          //   map,
          //   position: coords
          // })

          map.setCenter(coords);
        } else {
          console.log('에러임')
        }
      })
    })
  }, 500)

  return (
    <Modal
      className="basic-modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={show}
    >
      <Card className="basic-modal-card">
        <CardContent>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} className="modal-title">
              <IconButton onClick={clickCloseButton}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <OfficetelInfoCard
                title='선택한 오피스텔'
                transaction={tempData}
                handleShowModal={emptyFunction}
              />
            </Grid>
            <Grid item>
              <ChartCard
                children={
                  <BasicSingleLineChart
                    dataKeys={dataKeys}
                    data={data}
                  />
                }
              />
              {/* <BasicSingleLineChart 
                                dataKeys={dataKeys}
                                data={data}
                            /> */}
            </Grid>
            <Grid item>
              <BasicTable
                spacingClass='basic-table-card-1'
                headers={tempHeaders}
                datas={transactions}
                usePage={false}
              ></BasicTable>
            </Grid>
            <Grid item>
              <div id="kakaomap" className="kakao-map-card"></div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default BasicModal;
