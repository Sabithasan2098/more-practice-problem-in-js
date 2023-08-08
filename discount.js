function ticketPrice(ticketQuentity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuentity <= 100){
        const price = ticketQuentity * first100Rate;
        return price;
    }
    else if(ticketQuentity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuentity = ticketQuentity - 100;
        const restTicketPrice = restTicketQuentity * second100Rate;
        const totalprice = first100Price + restTicketPrice;
        return totalprice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuentity = ticketQuentity - 200;
        const restTicketPrice = restTicketQuentity * restTicketRate;
        const totalCost = first100Price + second100Price +  restTicketPrice ;
        return totalCost;
    }
}
const totalPriceOfTheTicket = ticketPrice( 290);
console.log(totalPriceOfTheTicket);