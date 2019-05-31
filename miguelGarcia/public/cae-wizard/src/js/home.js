import Chart from 'chart.js';
import { View } from './view.js';
import { database } from './storeManager.js';

export class Home extends View {

    constructor (miVar) {
        super();
       
    }
    
    render () {
        return `
        <div class="content">
            <div><p><h2> DASHBOARD </h2></p></div>
            <div>
                 
            </div>
            <canvas id="myChart" width=60% height=60% ></canvas>
        </div>
        `
    }
    afterMount(){
        database.readDataSnapshot('docs').then((data)=>{
            this.drawChart(data);
        });
    }
    drawChart(data){
        let chartData = this.preparedChartData(data);
        let ctx = document.getElementById('myChart').getContext('2d');
        let docsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Caducados','Caducidad proxima', 'Actualizados'],
                datasets: [{
                label: 'Vigencia de los documentos',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 150,
                        right: 150,
                        top: 150,
                        bottom: 150
                    }
                }
            }
        });
        let workersChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Caducados','Caducidad proxima', 'Actualizados'],
                datasets: [{
                label: 'Vigencia de los documentos',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 150,
                        right: 150,
                        top: 50,
                        bottom: 150
                    }
                }
            }
        });

    }
    preparedChartData(data){
        var diferenceDays = 0;
        var milisecondsForDay = 86400000;
        var d = new Date;
        var actualDate = d.getTime();
        var timeToExpired;
        var expired = 0;
        var toExpired = 0;
        var actual = 0;
        var preparedData = [];
        for (let prop in data){
            timeToExpired = Date.parse(data[prop]['Tiempo para que expire']);
            diferenceDays = (timeToExpired-actualDate)/milisecondsForDay;
            if (diferenceDays > 7 ){
                actual++
            };
            if (diferenceDays < 1){
                expired++
            };
            if (diferenceDays < 7 && diferenceDays > 1){
                toExpired++
            };
        }

        console.log('proximos a expirar: ' + toExpired);
        console.log('Expirados: ' + expired);
        console.log('Actualizados:' + actual);
        preparedData[0] = expired;
        preparedData[1] = toExpired;
        preparedData[2] = actual;
        return preparedData;
    }
}