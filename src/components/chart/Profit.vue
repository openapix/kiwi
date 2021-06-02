<template>
    <canvas id="profitChart"></canvas>
</template>

<script>
export default {
    setup() {
        
    },
    mounted(){
        const labels = ['6/01', '6/02', '6/03', '6/04', '6/05', '6/06', '6/07']
        const data = {
            labels: labels,
            datasets: [
                {
                    label: '预计支出',
                    data: [200, 200 + 20 * 1, 200 + 20 * 2, 200 + 20 * 3, 200 + 20 * 4, 200 + 20 * 5, 200 + 20 * 6],
                    borderColor: 'rgb(255, 99, 132)',
                },
                {
                    label: '预计收益',
                    data: [1615 + 160 * 1, 1615 + 202 * 2, 1615 + 202 * 3, 1615 + 202 * 4, 1615 + 202 * 5, 1615 + 202 * 6, 1615 + 202 * 7],
                    borderColor: 'rgb(54, 162, 235)',
                }
            ]
        }

        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {}
            },
        }

        var chart = new Chart(
            document.getElementById('profitChart'),
            config
        )
    }
}
</script>