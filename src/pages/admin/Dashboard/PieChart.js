import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";

function PieChartDetails(props) {
    let myData = props?.data || []

    if (!myData?.length) {
        return <h5 className='text-center p-4'>No Data Available.</h5>
    }

    useLayoutEffect(() => {
        let root = am5.Root.new("pieChart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout
            })
        );

        // Define data
        let data = myData || [];

        // Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                name: "Hiring Source",
                valueField: "value",
                categoryField: "title"
            })
        );

        series.data.setAll(data);

        // Disabling labels and ticks
        series.labels.template.set("visible", false);
        series.ticks.template.set("visible", false);

        series.slices.template.states.create("active", {
            shiftRadius: 0,
            stroke: am5.color(0x995522),
            strokeWidth: 5
        });

        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.verticalLayout
        }));

        legend.data.setAll(series.dataItems);

        return () => {
            root.dispose();
        };
    }, [props?.data]);

    return (
        <div id="pieChart" style={{ width: "100%", height: "500px" }}></div>
    );
}
export default PieChartDetails;