/*We are going to represent our contacts in a map where both the keys and values are strings.
Create a map with the following key-value pairs:

Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Create an application which prints out the answers to the following questions:

What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number?*/
let MyTelephoneBook: any = {
  "William A. Lathan": "405-709-1865",
  "John K. Miller": "402-247-8568",
  "Hortensia E. Foster": "606-481-6467",
  "Amanda D. Newland": "319-243-5613",
  "Brooke P. Askew": "307-687-2982",
};
function WhatisPhonenumberof(t: string) {
  console.log(Object.values(MyTelephoneBook[t]).join(""));
}

//function findKey(object: any, value: any) {
//  for (let key in object) if (object[key] === value) return key;
//  return "key is not found";}

function Whosephonenumberis(Phonenumber: string) {
  for (let i = 0; i < Object.keys(MyTelephoneBook).length; i++) {
    if (Object.values(MyTelephoneBook)[i] == Phonenumber)
      console.log(Object.keys(MyTelephoneBook)[i]);
  }
}

function DoweknoThehonenumberof(Name: string) {
  let Bynomatch: any = "";
  for (let i = 0; i < Object.keys(MyTelephoneBook).length; i++) {
    if (Object.keys(MyTelephoneBook)[i] == Name) {
      console.log(Object.values(MyTelephoneBook)[i]);
      Bynomatch = Object.values(MyTelephoneBook)[i];
    }
  }
  if (Bynomatch.lenght == undefined) console.log("We don't know");
  {
  }
}

WhatisPhonenumberof("John K. Miller");
Whosephonenumberis("307-687-2982");
DoweknoThehonenumberof("Chris E. Myer");
