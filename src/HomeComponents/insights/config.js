
export const state = {
    labels: ['item1', 'item2', 'item3',
             'item4', 'item5','item6','item7','item8'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
        borderColor: '#764ECA',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56,66,40,80],
        pointRadius:0,
        lineTension: 0.5,
      }
    ]
  }
  export const state2 = {
    labels: ['item1', 'item2', 'item3',
             'item4', 'item5','item6','item7','item8'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
        borderColor: '#FEE877',
        borderWidth: 2,
        data: [65, 12, 70, 32, 40,19,30,60],
        pointRadius:0,
        lineTension: 0.5,
      }
    ]
  }
 export const state3= {
    labels: ['item1', 'item2', 'item3',
             'item4', 'item5','item6','item7','item8'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
        borderColor: '#0C9AFE',
        borderWidth: 2,
        data: [10, 20, 30, 25, 35,22,10,30],
        pointRadius:0,
        lineTension: 0.5,
      }
    ]
  }
 export const state4 = {
    labels: ['item1', 'item2', 'item3',
             'item4', 'item5','item6','item7','item8'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
        borderColor: '#29DDBB',
        borderWidth: 2,
        data: [65, 30, 20, 90, 34,66,40,80],
        pointRadius:0,
        lineTension: 0.5,
      }
    ]
  }
 export const state5 = {
    labels: ['05', '10', '15',
             '20', '25','30','35','40'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
        borderColor: '#639DFF',
        borderWidth: 2,
        data: [65, 30, 20, 90, 34,66,40,80],
        pointRadius:0,
        lineTension: 0.5,
      },{
          label: 'Rainfall2',
          backgroundColor: ['rgba(255,255,192,1)','rgba(255,255,130,1)'],
          borderColor: '#04B4FF',
          borderWidth: 2,
          data: [12, 70, 24, 56, 23,75,12,30],
          pointRadius:0,
          lineTension: 0.5,
      }
    ]
  }
export  const state6 = {
    labels: ['05', '10', '15',
             '20'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#0561FC','#FD2227','#FCCC42','#12B886'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [10, 10, 10, 10],
      }
    ]
}
export  const state7 = {
    labels: ['jan', 'feb', 'mar',
             'apr','may','jun'],
    datasets: [
      {
        label: 'Rainfall1',
        backgroundColor: ['#12B886'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [10, 20, 30, 40],
        barThickness:10,
        borderRadius:10,
      },
      {
        label: 'Rainfall2',
        backgroundColor: ['#0561FC'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [5, 10, 20, 30],
        barThickness:10,
        borderRadius:10,
      },
    ]
}
export  const state8 = {
    labels: ['05', '10', '20'],
    datasets: [
      {
        label: 'piMd',
        backgroundColor: ['#FD2227','#0561FC','#12B886'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [10, 10, 10],
      
      }
    ]
}
export  const state9 = {
    labels: ['05', '10', '20'],
    datasets: [
      {
        label: 'fsChart1',
        backgroundColor: ['#FD2227'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [10],
        spacing:50
      
      },
      {
        label: 'fsChart2',
        backgroundColor: ['#0561FC'],
        borderColor: '#639DFF',
        borderWidth: 0,
        data: [5],
      
      },
    ]
}
export const options={
    plugins:{
         legend: {
            display: false,
        },
       
    },
    scales: {
        x: {
            display: false,
            grid:{
             display:false
            } 
            
           },
        y:{
         grid:{
          display:false
         },
         display: false,
        }
   }
   
};
export const options2={
    plugins:{
         legend: {
            display: false,
        },
       
    },
    scales: {
        y:{
         grid:{
          display:false
         },
         display: false,
        }
   }
   
};
export const options3={
    plugins:{
         legend: {
            display: false,
        },
       
    }
   
};
      
export const options4={
    plugins:{
         legend: {
            display: false,
        },
       
    },
    scales: {
        y:{
         grid:{
          display:false
         },
         display: false,
        }
   }
   
};
      