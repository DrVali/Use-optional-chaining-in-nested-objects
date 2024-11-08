const useWithPhone={
    name:"alice",
    contact: {phone:"123-456-789"},
};
const userWithOutPhone = { 
    name:"Bob",
};
function getUserContact(user){
     for (let userPhone in user )
     {  
        let temp=user.contact?.phone;
        const phoneNumber =
        temp === null || temp === undefined ? "Phone number not available " : temp;
        console.log();
        console.log("name is:  "+ user?.name + "  phone number is: " + phoneNumber);
     }
}
getUserContact(useWithPhone);
getUserContact(userWithOutPhone);