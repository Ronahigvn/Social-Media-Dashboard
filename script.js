let myChart;

const chartData = {
    instagram: {
        label: 'Instagram Etkileşim',
        color: '#E1306C',
        data: [120, 150, 180, 90, 200, 220, 210]
    },
    facebook: {
        label: 'Facebook Beğeni',
        color: '#3b5998',
        data: [100, 90, 140, 130, 160, 180, 170]
    },
    snapchat: {
        label: 'Snapchat Görüntüleme',
        color: '#FFFC00',
        data: [60, 80, 70, 90, 100, 95, 110]
    }
};

function loadChart(platform) {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Grafik varsa önce sil
    if (myChart) {
        myChart.destroy();
    }

    const current = chartData[platform];

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Pzt', 'Salı', 'Çarş', 'Perş', 'Cuma', 'Ctesi', 'Pazar'],
            datasets: [{
                label: current.label,
                data: current.data,
                borderColor: current.color,
                backgroundColor: current.color + '33', // transparan arka plan
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Sayfa yüklendiğinde ilk grafik Instagram olsun
window.onload = () => {
    loadChart('instagram');
};
