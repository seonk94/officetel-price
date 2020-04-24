import * as React from 'react';
import { CardContent, Card, Icon } from '@material-ui/core';
import './SingleDataCard.scss';

export interface Props {
    icon?: string;
    iconColor?: string;
    title: string;
    value: string | number
}
function SingleDataCard({ icon, iconColor, title, value } : Props) {

    return (
        <Card className="singledata-card" variant="outlined">
            <CardContent className="body">
                <div className="body-header">
                    <h5>{title}</h5>
                </div>
                <div className="body-content">
                    <h3>{value}</h3>
                </div>
            </CardContent>
        </Card>
    )

}

export default SingleDataCard;