import CardWithHeader from "../ui/card-with-heade"

const OrderInfromation = () => {
    return(
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name"> Full Name</label>
                    <input type="text" placeholder="Type your full name" id="full_name" />
                </div>
                <div className="input-group">
                    <label htmlFor="wa_number"> Whatsapp Number</label>
                    <input type="text" placeholder="+62xxxx" id="wa_number" />
                </div>
                <div className="input-group">
                    <label htmlFor="shipping_addres"> Shipping Address</label>
                    <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="shipping_addres" rows={7}/>
                </div>
            </div>
        </CardWithHeader>
    )
}

export default OrderInfromation