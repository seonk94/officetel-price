import * as React from 'react';
import { CardContent, Card, Icon } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './SingleDataCard.scss';

export interface Props {
    icon?: string;
    iconColor?: string;
    title: string;
    value: string | number;
    compareValue: string;
}
function SingleDataCard({ icon, iconColor, title, value, compareValue } : Props) {

    const isCompareValueIncrease = compareValue.slice(0, 1) === '+'
    const compareIconColor = isCompareValueIncrease ? 'primary' : 'secondary'
    return (
        <Card className="singledata-card" variant="outlined">
            <CardContent className="body">
                <div className="body-header">
                    <h5>{title}</h5>
                </div>
                <div className="body-content">
                    <h3>{value}</h3>
                    <div className="compare-content">
                        {isCompareValueIncrease ? <ArrowDropUpIcon color={compareIconColor}/> : <ArrowDropDownIcon color={compareIconColor}/> }
                        <span>{compareValue.slice(1)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default SingleDataCard;