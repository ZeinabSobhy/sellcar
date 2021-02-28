import axiosInstance from '../axios/axiosInstance';


export const Details = () =>   {
   return axiosInstance.get('CustomerCarSellApi/GetMakeModels')
}


export const postCarRequest = (body) =>   {
   const request = {
      CustomerEmiratesId : 1 ,
      EmiratesId : 1 ,
      PlateCode: "",
      PlateNumber: "" ,
      Year: "2021"
   }
   return axiosInstance.post('CustomerCarSellApi/NewCustomerCarSellRequest',{...request , ...body})
}