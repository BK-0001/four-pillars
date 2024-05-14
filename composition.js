// const car1 = {
//   engine: {
//     name: "V6",
//     componentCount: 1000,
//     fuelConsumption: 10,
//     unitOfFuelConsumption: "l/100km"
//   },
//   steeringWheel: {
//     model: "kia-standard 16-inch",
//     description: "very smooth, driver can control direction with single finger"
//   },
//   door: {
//     count: 4,
//     size: 18,
//     unit: "inch"
//   }
// };

class Name {
  constructor(firstName, lastName, middleName = "") {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
}

class Address {
  constructor(unit = "", street, city, province, postalCode) {
    this.unit = unit;
    this.street = street;
    this.city = city;
    this.province = province;
    this.postalCode = postalCode;
  }
}

class User {
  constructor(
    firstName,
    lastName,
    middleName = "",
    unit = "",
    street,
    city,
    province,
    postalCode
  ) {
    this.name = new Name(firstName, lastName, middleName);
    this.address = new Address(unit, street, city, province, postalCode);
  }
}

const user1 = new User(
  "Yasuhito",
  "Komamo",
  "",
  "",
  "200 St",
  "Langley",
  "BC",
  "v2r k1a"
);
console.log(user1);
