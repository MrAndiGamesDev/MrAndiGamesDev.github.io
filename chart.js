// Fetch GitHub repository stars data
async function fetchGitHubStars(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);
        const data = await response.json();

        // Extract repository names and star counts
        const repoNames = data.map(repo => repo.name);
        const starCounts = data.map(repo => repo.stargazers_count);

        return { repoNames, starCounts };
    } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        return { repoNames: [], starCounts: [] };
    }
}

// Function to load and display the chart
async function loadChart() {
    const { repoNames, starCounts } = await fetchGitHubStars('MrAndiGamesDev'); // Replace with actual GitHub username

    if (repoNames.length === 0 || starCounts.length === 0) {
        console.warn('No data available to display the chart.');
        return;
    }

    const chartData = {
        labels: repoNames, // Repository names as labels
        datasets: [{
            label: 'Stars per Repository',
            data: starCounts, // Stars data from GitHub API
            backgroundColor: 'rgba(58, 132, 255, 0.1)', // Lighter fill color
            borderColor: 'rgba(58, 132, 255, 1)', // Bold border color
            borderWidth: 3,
            pointBackgroundColor: 'rgba(58, 132, 255, 1)', // Bold points
            pointBorderWidth: 2, // Slightly thicker border on points
            pointRadius: 6, // Larger points
            fill: true, // Fill area below the line
            tension: 0.35 // Slightly less smooth line for a more angular look
        }]
    };

    const chartConfig = {
        type: 'line', // Line chart type
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow flexible scaling
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 16,
                            family: 'Arial, sans-serif',
                            weight: 'bold' // Bold font style for the legend
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Repositories',
                        font: {
                            size: 18,
                            family: 'Arial, sans-serif',
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        maxRotation: 45, // Rotate labels for better readability
                        minRotation: 0,
                        font: {
                            size: 12,
                            family: 'Arial, sans-serif',
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Stars',
                        font: {
                            size: 18,
                            family: 'Arial, sans-serif',
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Arial, sans-serif',
                        }
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.35, // Angular lines to give a slightly more defined look
                    borderColor: 'rgba(58, 132, 255, 1)', // Bold line color
                    borderWidth: 3, // Thicker line
                },
                point: {
                    radius: 6, // Larger points
                    hoverRadius: 8, // Larger hover radius for interaction
                    borderWidth: 2, // Thicker point border
                    backgroundColor: 'rgba(58, 132, 255, 1)', // Consistent point color with the line
                }
            }
        }
    };

    const chartCanvas = document.getElementById('starsChart');

    if (chartCanvas) {
        new Chart(chartCanvas, chartConfig);
    } else {
        console.error('Chart canvas element not found.');
    }
}

// Load chart after the page content is fully loaded
window.addEventListener('load', loadChart);