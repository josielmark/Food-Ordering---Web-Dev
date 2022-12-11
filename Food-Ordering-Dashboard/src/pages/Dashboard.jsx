import React from 'react';
import DashboardWrapper, { DashboardWrapperMain } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox from '../components/summary-box/SummaryBox'
import { data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-8 col-md-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </DashboardWrapperMain>
        </DashboardWrapper>
    )
}

export default Dashboard
