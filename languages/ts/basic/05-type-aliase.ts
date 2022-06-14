// Type Aliases

type PersonTypeProps = {
  name: string;
  age: number;
  gender: "male" | "female" | "other"
}


const showPerson = ({ name, age, gender }: PersonTypeProps) => {
  console.log(`Name: ${name}, age: ${age}, gender: ${gender}`);
}

const person: PersonTypeProps = {
  name: "rahim",
  age: 27,
  gender: 'male'
};
showPerson(person);
