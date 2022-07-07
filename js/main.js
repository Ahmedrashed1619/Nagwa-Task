
// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(2500, function(){
        $('body').css('overflow','visible')
    })
})


// Chart selector 

let myChart = document.getElementById('myChart').getContext('2d');

// init values

Chart.defaults.font.size= 10;
Chart.defaults.color= '#969696';


// copy from Chart obj

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['12/1', '27/1', '12/2', '27/2', '12/3', '27/3', '12/4', '27/4', '12/5' , '27/5', '12/6', '27/6', '12/7', '27/7', '12/8', '27/8'],
        datasets: [{
            barPercentage: 1.1,
            categoryPercentage: 0.6,
            maxBarThickness: 16,
            label: 'Adam',
            data: [60, 62, 58, 59, 57, 53, 46, 57, 62, 57, 61, 47, 47, 52, 47, 56, 50],
            backgroundColor: '#E5F0F7',
            borderWidth: 1,
            borderColor: '#0575B6',
            borderRadius: 50,
        },{
            barPercentage: 1.1,
            categoryPercentage: 0.6,
            maxBarThickness: 16,
            label: 'Average',
            data: [62, 55, 45, 52, 52, 58, 51, 58, 58, 51, 58, 55, 58, 43, 57, 58, 56],
            backgroundColor: '#E5E5E5',
            borderWidth: 1,
            borderColor: '#333333',
            borderRadius: 50,
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scaleShowVerticalLines: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 65,
                min: 30,
                ticks: {
                    stepSize: 5,
                    padding: 0
                },
                grid:{
                    drawBorder: false,
                    drawTicks: false,
                }
            },
            x: {
                grid:{
                    drawBorder: false,
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});


// fetsh data from chart

$('#adam').html(barChart.data.datasets[0].label);
$('#avg').html(barChart.data.datasets[1].label);


// days of the week in attendence section

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for(let day of days){
    $('.days').append(`<span>${day}</span>`);
};


// status attendence section

for(let i = 0; i < 5; i++){
    $('#row').append(
        `
        <div class="col-12">
            <div class="month d-flex justify-content-center align-items-center">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        `
    )
}

// the number inside span

let numbers = $('.col-12 .month span');

for(let i= 0; i < numbers.length; i++){
    $('.col-12 .month span').eq(i).html(i-1)
}

// day isn't a month
let empty = [0, 1, 33, 34];
for(let day of empty){
    ($('.col-12 .month span').eq(day)).addClass('empty');
}

// day of absence
let absence = [14, 21, 23, 28];
for(let day of absence){
    ($('.col-12 .month span').eq(day)).addClass('absence');
}

// holidays
let holidays = [5, 6, 12, 13, 19, 20, 26, 27];
for(let day of holidays){
    ($('.col-12 .month span').eq(day)).addClass('holiday');
}


// dynamic date to get full year

let date = new Date();

let newYear = date.getFullYear();
$('.year').html(newYear);

