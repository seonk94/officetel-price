import * as React from 'react';
import Card from '@material-ui/core/Card';
import './BasicModal.scss'
import { Modal, CardContent, Grid, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import OfficetelInfoCard from '../Card/OfficetelInfoCard';
import BasicTable from '../Table/BasicTable';
import { transactions } from '../../constants/example';

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
const tempHeaders : { text: string, value: string }[] = [
    { text: '거래년도', value: 'year' },
    { text: '거래일', value: 'day' },
    { text: '보증금', value: 'deposit' },
  ]
function BasicModal() {

    const { kakao } : any = window

    setTimeout(() => {
        kakao.maps.load(() => {
        const mapContainer = document.getElementById('kakaomap');
        const options = {
            center : new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }
    
        new kakao.maps.Map(mapContainer, options);
        })
    }, 500)
    
    return (
        <Modal
            className="basic-modal"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={true}
        >
            <Card className="basic-modal-card">
                <CardContent>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12} className="modal-title">
                            <IconButton>
                                <CloseIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <OfficetelInfoCard
                                title='선택한 오피스텔'
                                transaction={tempData}
                            />
                        </Grid>
                        <Grid item>
                            <BasicTable
                                spacingClass='basic-table-card-1'
                                headers={tempHeaders}
                                datas={transactions}
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