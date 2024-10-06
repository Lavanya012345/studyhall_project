


import React from 'react';
import './css/analytics.css'

function Analytics() {
    const imageUrl = 'http://127.0.0.1:5000/api/analytics';

    return (
        <div className='container_'>

            <h1>Study Hall Analytics</h1>
            <img className='img_clr' src={imageUrl} alt="Study Hall Analytics" />
            
        </div>
    );
}

export default Analytics;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AnalyticsCharts() {
//     const [chartHtml, setChartHtml] = useState('');

//     useEffect(() => {
//         axios.get('http://127.0.0.1:5000/api/analytics', {
//             responseType: 'blob'  // Ensure Axios knows you're expecting an image
//         })
//         .then(response => {
//             console.log(response);  // Log the response to inspect it
//             const imageUrl = URL.createObjectURL(response.data);
//             setChart(imageUrl);
//         })
//         .catch(error => {
//             console.error('Failed to fetch charts', error);
//         });
//     }, []);

//     return (
//         <div>
//             <h1>Study Hall Analytics</h1>
//             {chart && (
//                 <img src={chart} alt="Bar Chart" />
//             )}
//         </div>
//     );
// }

// export default AnalyticsCharts;
