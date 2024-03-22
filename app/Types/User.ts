//This is not a complete interface over everything
//available in the userData object.
//To save time I only selected some propertys.
export interface User {
  cell: string;
  dob: {
    date: string;
    age: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: string;
    };
  };
  phone: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  registred: {
    date: string;
    age: number;
  };
}
