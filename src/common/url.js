import {Store} from '@common';

const url = {
    getorderdetailsurl : Store.baseurl+'orders/getOrderDetails',
    getallcompletedordersurl : Store.baseurl+'merchant/getAllOrdersByRestaurant',
    getallcanceledordersurl : Store.baseurl+'merchant/getAllOrdersByRestaurant',
    // getrestaurantdetailsurl : Store.baseurl+'restaurant/getrestaurantdetails',
    getdriverdetailsurl : Store.baseurl+'driver/getDriverDetails',
    getdriversummeryurl : Store.baseurl+'driver/getDriverSummery',
    confirmorderbydriverurl : Store.baseurl+'driver/ConfirmOrderByDriver',
    getallordersurl : Store.baseurl+'driver/getAllOrdersByDriver',
    loginurl : Store.baseurl+'driver/login',
    driverstatusupdateurl : Store.baseurl+'driver/live',
    orderstatusupdateurl : Store.baseurl+'merchant/updateOrderStatus',
    finddriversurl : Store.baseurl+'merchant/findDrivers',
    assignordertodriverurl : Store.baseurl+'merchant/assignDriver',
    updatefoodavailabilityurl : Store.baseurl+'merchant/updatefoodavailability',
    getfoodcategorieslisturl : Store.baseurl+'merchant/getfoodcategories',
    updatecateoryavailabilityurl : Store.baseurl+'merchant/updatecategoryavailability',
    getfoodlisturl : Store.baseurl+'merchant/getfoodlist',
}

export default url;