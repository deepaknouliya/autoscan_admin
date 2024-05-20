import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";

function FunnelSeries(props) {
    let myData = props?.data || []

    if (!myData?.length || (myData[0]?.applicants === 0)) {
        return <h5 className='cards-section text-center p-4'>No Data Available.</h5>
    }

    useLayoutEffect(() => {
        let root = am5.Root.new("funnelChart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5percent.SlicedChart.new(root, {
                layout: root.horizontalLayout
            })
        );

        // Define data
        let data = myData || [];

        // Create series
        let series = chart.series.push(
            am5percent.FunnelSeries.new(root, {
                name: "Series",
                valueField: "applicants",
                categoryField: "stage",
                orientation: "vertical",
                alignLabels: true,
                bottomRatio: 1,
                width: am5.percent(90),
                legendLabelText: "{category}:",
                legendValueText: "[bold]{value} ({percentage.formatNumber('0.00')}%[/])"
            })
        );
        series.data.setAll(data);
        series.labels.template.setAll({
            fontSize: 14,
            // fill: am5.color(0x550000),
            text: "{category}: [bold]{value}[/]"
        });
        series.links.template.setAll({
            height: 4
        });

        series.slices.template.set("tooltipText", "{category}: [bold]{value}[/]");
        // series.labels.template.set("text", "{category}: [bold]{value} ({percentage.formatNumber('0.00')}%[/])");

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            y: am5.percent(25),
            layout: root.verticalLayout,
        }));

        legend.data.setAll(series.dataItems);

        return () => {
            root.dispose();
        };
    }, [props?.data]);

    return (
        <div className='cards-section p-2'>
            <div id="funnelChart" style={{ width: "100%", height: "500px" }}></div>
        </div>
    );
}
export default FunnelSeries;