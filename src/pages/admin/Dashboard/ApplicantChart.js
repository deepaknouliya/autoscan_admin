import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function ApplicantChart(props) {
    let myData = props?.data || []

    if (!myData?.length) {
        return <h5 className='cards-section text-center p-4'>No Data Available.</h5>
    }

    useLayoutEffect(() => {
        let root = am5.Root.new("applicantChart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout
            })
        );

        let data = myData || []

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                categoryField: "category",
            }),
        );
        xAxis.data.setAll(data);

        // Create series
        let series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Total",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category",
            })
        );
        series1.data.setAll(data);

        let series2 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Pending",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value2",
                categoryXField: "category"
            })
        );
        series2.data.setAll(data);
        let series3 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Shortlisted Q&A",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value3",
                categoryXField: "category"
            })
        );
        series3.data.setAll(data);
        let series4 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Shortlisted F2F",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value4",
                categoryXField: "category"
            })
        );
        series4.data.setAll(data);
        let series5 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Selected",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value5",
                categoryXField: "category"
            })
        );
        series5.data.setAll(data);
        let series6 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Onboard",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value6",
                categoryXField: "category"
            })
        );
        series6.data.setAll(data);
        let series7 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "On Hold",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value7",
                categoryXField: "category"
            })
        );
        series7.data.setAll(data);
        let series8 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Rejected",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value8",
                categoryXField: "category",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}"
                })
            })
        );
        series8.data.setAll(data);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);

        // Add cursor
        // chart.set("cursor", am5xy.XYCursor.new(root, {}));

        return () => {
            root.dispose();
        };
    }, [props?.data]);

    return (
        <div className='cards-section p-2'>
            <div id="applicantChart" style={{ width: "100%", height: "500px" }}></div>
        </div>
    );
}
export default ApplicantChart;