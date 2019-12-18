import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import TodayScreen from './Screens/TodayScreen'
import CalendarScreen from './Screens/CalendarScreen'
import ChartScreen from './Screens/ChartScreen'

const Router : React.FC = () => (
    <Switch>
        <Route path="/" exact component={TodayScreen} />
        <Route path="/calendar" component={CalendarScreen} />
        <Route path="/chart" exact component={ChartScreen} />
        <Redirect path="*" to="/" />
    </Switch>
)
export default Router;