import { Component } from "@angular/core";
import { SeriesLabels } from "@progress/kendo-angular-charts";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-legend position="bottom" orientation="horizontal">
      </kendo-chart-legend>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="categories">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>

      <kendo-chart-series>
        <kendo-chart-series-item
          name="Booked"
          type="column"
          [data]="[15, 20, 40, 22, 15, 20, 16]"
          color="#b7cff7"
          [labels]="seriesColumnsLabels"
        >
        </kendo-chart-series-item>
        <kendo-chart-series-item
          name="Reversed"
          type="line"
          [data]="[6, 9, 13, 5, 2, 8, 3]"
          [labels]="seriesLabels"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public categories: string[] = [
    "Fund A",
    "Fund B",
    "Fund C",
    "Fund D",
    "Fund E",
    "Fund F",
    "Fund G"
  ];

  public seriesLabels: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    font: "bold 16px Arial, sans-serif",
    color: "#ff8c00"
  };

  public seriesColumnsLabels: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    //font: "bold 16px Arial, sans-serif",
    color: "blue"
  };
}
