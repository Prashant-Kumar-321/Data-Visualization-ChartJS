import Chart from 'chart.js/auto'; 
import zoomPlugin, { zoom } from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);


const ctx = document.querySelector("#price-history");

const drawChart = async () => {
    const data = [
        { timestamp: '2023-01-01', price: 249 },
        { timestamp: '2023-01-02', price: 105 },
        { timestamp: '2023-01-03', price: 110 },
        { timestamp: '2023-01-04', price: 115 },
        { timestamp: '2023-01-05', price: 200 },
        { timestamp: '2023-01-06', price: 130 },
        { timestamp: '2023-01-07', price: 130 },
        { timestamp: '2023-01-08', price: 300 },
        { timestamp: '2023-01-09', price: 140 },
        { timestamp: '2023-01-10', price: 145 },
        { timestamp: '2023-01-11', price: 436 },
        { timestamp: '2023-01-12', price: 111 },
        { timestamp: '2023-01-13', price: 260 },
        { timestamp: '2023-01-14', price: 165 },
        { timestamp: '2023-01-15', price: 198 },
        { timestamp: '2023-01-16', price: 234 },
        { timestamp: '2023-01-17', price: 180 },
        { timestamp: '2023-01-18', price: 399 },
        { timestamp: '2023-01-19', price: 165 },
        { timestamp: '2023-01-20', price: 187 },
    ];

    const options = {
        scales: {
            x: {
                min: 10, 
                max: 19,
            },
            y: {
                title: {
                    display: true,
                    text: 'Product Price',
                    font:{
                        size: 18, 
                        weight: 'bold',
                        family: 'Arial',
                    }   
                },
            },
        },

        plugins: {
            legend: {
              display: false,
            },
            zoom: {
                pan:{
                    enabled: true,
                    mode: 'x',
                }, 
                zoom:{
                    wheel:{
                        enabled: true,
                    },          
                    pinch:{
                        enabled: true,
                    },
                    mode: 'x',
                }
            }
        }
    } 

    const config = {
        type: 'line',
        data: {
            labels: data.map(row => row.timestamp),
            datasets: [
                {
                    label: 'Price',
                    data: data.map(row => row.price),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0,
                    borderWidth: 2,
                },
            ],
        },
        options: options,
    }
    
    new Chart(ctx, config); 
}

document.addEventListener("DOMContentLoaded", drawChart); 