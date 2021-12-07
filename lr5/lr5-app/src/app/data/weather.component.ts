import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherDataSource } from './weather.data';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherDialog } from './weather.popup';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-weather-list',
  templateUrl: "./weather.component.html",
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {

  dataSource: WeatherDataSource;
  displayedColumns: string[] = ['Selected', 'City', 'Temp', 'Humidity', 'Wind_speed', 'Details'];
  clickedRows = new Array<any>();
  selection = new SelectionModel<any>(true, []);


  constructor(private weatherService: WeatherService, public dialog: MatDialog) {
    this.dataSource = new WeatherDataSource(this.weatherService);
  }
  
  getProgress(){
    return this.dataSource.getProgress();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.size();
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.getData());
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialog(): void {
    const clickedRow = this.clickedRows.pop()
    this.dialog.open(WeatherDialog, {
      
      data: {
        city: clickedRow.title,
        country: clickedRow.parent.title,
        applicable_date: clickedRow.consolidated_weather[0].applicable_date,
        weather_state_name:     clickedRow.consolidated_weather[0].weather_state_name,
        humidity:               clickedRow.consolidated_weather[0].humidity,
        max_temp:               clickedRow.consolidated_weather[0].max_temp,
        min_temp:               clickedRow.consolidated_weather[0].min_temp,
        temp:                   clickedRow.consolidated_weather[0].the_temp,
        visibility:             clickedRow.consolidated_weather[0].visibility,
        sun_rise: clickedRow.sun_rise,
        sun_set: clickedRow.sun_set,
      }
    });
  }

  showChosen(): void {
    this.dataSource.changeData(this.selection.selected);
  }
  showAll(): void {
    this.dataSource.restoreData();
  }

  ngOnInit() {
    this.dataSource.loadWeather();
  }
}
