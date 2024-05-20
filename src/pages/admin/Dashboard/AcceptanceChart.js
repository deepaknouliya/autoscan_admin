import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function AcceptanceChart(props) {
    let acceptanceDetails = props?.data || ""

    const getPercentValue = () => {
        let onboarded = acceptanceDetails?.onboarded || 0
        let offered = acceptanceDetails?.offered || 0
        if (!onboarded && !offered) {
            return 0
        }
        return ((onboarded / offered) * 100).toFixed(2)
    }

    const percentage = getPercentValue()

    return (
        <div id="chart">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
            />;
        </div>
    );
}
export default AcceptanceChart;