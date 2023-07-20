// import React, { useEffect, useState } from 'react';
// import ReactApexChart  from 'react-apexcharts';

// const ECGdata = () => {
//   const [ecg, setECG] = useState([]);
//   const [timestamp, setTime] = useState([]);
  
//   // const [state, setState] = useState({

//   // })

//   // async componentDidMount() {
//   //   window.setInterval(() => {
//   //     getNewSeries(lastDate, {
//   //       min: 10,
//   //       max: 90
//   //     })
      
//   //     ApexCharts.exec('realtime', 'updateSeries', [{
//   //       data: data
//   //     }])
//   //   }, 1000)
//   // }

//   useEffect(() => {
//     const getData = async () => {
//     const url = 'http://localhost:5000/awsdata';
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setECG(data?.map((item) => item.data.M.ECG_Reading.N));
//       setTime(data?.map((item) =>item.data.M.time.N));
//     } catch (error) {
//         console.log(error);
//     }
//   };
//     getData();
//   }, []);
//   const series = [ //data on the y-axis
//     {
//       name: "ECG Reading",
//       data: ecg
//     }
//   ];
//   const options = { //data on the x-axis
//   chart: { id: 'realtime'},
//   xaxis: {
//     categories: timestamp
//   },
//   animations: {
//     enabled: true,
//     easing: 'linear',
//     dynamicAnimation: {
//       speed: 1000
//     }
//   },
// };
//   return (
//     <div>
 
//     <ReactApexChart
//       options={options}
//       series={series}
//       type="line"
//       width="450"
//       height = "300"
//       position = 'center'
// />
//   </div>
//   )
// };

// export default ECGdata;


// // import React from 'react';
// // import Pdf from "react-to-pdf";

// // const ref = React.createRef();

// // const PDF = (props) => {
// //   return (
// //     <>
// //       <div className="Post" ref={ref}>
// //         <h1>{props.title}</h1>
// //         <img src={props.image} alt={props.title} />
// //         <p>{props.content}</p>
// //       </div>
// //       <Pdf targetRef={ref} filename="post.pdf">
// //         {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
// //       </Pdf>
// //     </>
// //   );
// // }

// // export default PDF;