let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

//array 
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];
//nested properties 
contact.email = {
private: "RonaldSMurphy@freepost.org",
work: "rsmurphy@briazz.com" 
};
console.log(contact.email.work);

