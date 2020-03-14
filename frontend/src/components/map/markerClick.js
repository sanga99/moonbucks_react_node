
import axios from 'axios';


 export function markerClickSalesMonth (storeName)  {
       return axios.post('/api/salesClickMarker', { name : storeName })   
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
}


 export function markerClickSalesTotal (storeName)  {
       return axios.post('/api/totalSalesClickMarker', { name : storeName })   
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
}


 export function markerClickProduct (storeName)  {
       return axios.post('/api/productClickMarker', { name : storeName })   
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
}

 export function markerClickCategory (storeName)  {
       return axios.post('/api/categorySalesClickMarker', { name : storeName })   
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
}

