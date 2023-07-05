interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage:
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  return initial + '. ' + lastName;
};

// Example usage:
const result = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe

interface StudentClassInterface {
  new(firstName: string, lastName: string): StudentClass;
}

class StudentClass {
  constructor(public firstName: jon, public lastName: snow) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


