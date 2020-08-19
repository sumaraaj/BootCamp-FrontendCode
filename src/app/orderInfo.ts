export interface CustomerInfo{
    customerId:number
    fullName:String
    email:String
    password:String
    city:String
    phoneNumber:number
    address : String
	zipCode :String
	country :String
	OrderInfo :any

    }

    export interface BookInfo{
    bookId :number
	title :String
	author :String
	description :String
	isbn :String
	price:number 
	publishDate:Date
    }    

    export interface Category{
        categoryId :number
	    categoryName :String
		BookInfo :any
    }

    export interface OrderInfo{
        orderId :number
        quantity :number
        subTotal :number
        total :number
        orderStatus :String
        orderDate:Date;
        paymentMethod :String
        bookInfo :BookInfo[];

    }