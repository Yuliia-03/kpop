import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { catchError, finalize } from 'rxjs/operators';


export class WeatherDataSource implements DataSource<any> {

    private data: any[] = [];
    private weatherSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private statesWoeids = [727232, 638242, 804365, 924938, 44418, 615702, 721943, 766273, 796597, 551801, 523920, 565346, 906057, 862592, ];

    public loading$ = this.loadingSubject.asObservable();

    constructor(private weatherService: WeatherService) { }

    getProgress(): number{
        return this.size() * 100 / this.statesWoeids.length;
    }

    size(): number{
        return this.data.length;
    }

    getData(){
        return this.data;
    }

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.weatherSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.weatherSubject.complete();
        this.loadingSubject.complete();
    }

    changeData(weatherData: any[]) {
        this.weatherSubject.next(weatherData)
    }

    restoreData() {
        this.weatherSubject.next(this.data)
    }

    loadWeather() {

        this.statesWoeids.forEach(woeid => {
            this.loadingSubject.next(true);

            this.weatherService.getWeather(woeid)
                .subscribe(weather => {
                    this.data.push(weather)
                    console.log(weather)
                    this.weatherSubject.next(this.data)
                    if(this.data.length == this.statesWoeids.length){
                        this.loadingSubject.next(false)
                    }
                });
        });

    }
}