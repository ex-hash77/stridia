import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //chart using chart.js

    //chart type dounat or pie chart
    const ctx = document.getElementById('pieChart');
    const ctx1 = document.getElementById('barsChart');
    const ctx2 = document.getElementById('lineChart');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Nasi Goreng', 'Ayam Geprek', 'Lemon Tea', 'Happitos', 'Indomie'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 6, 5, 8],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    //chart type bar
    const myChart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'],
          datasets: [{
              label: 'Penjualan Hari ini',
              data: [12, 19, 3, 5, 10, 3],
              backgroundColor: [
                  'rgba(255, 99, 132)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                  'rgba(75, 192, 192)',
                  'rgba(153, 102, 255)',
                  'rgba(255, 159, 64)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


  //chart type Line
  const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli','Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 10, 4, 2, 5, 20, 11],
            fill: false,
            // backgroundColor: [
            //     'rgba(255, 99, 132)',
            //     'rgba(54, 162, 235)',
            //     'rgba(255, 206, 86)',
            //     'rgba(75, 192, 192)',
            //     'rgba(153, 102, 255)',
            //     'rgba(255, 159, 64)'
            // ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

  }

}
