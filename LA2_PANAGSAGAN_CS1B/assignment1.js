// CS1B_JPPanagsagan_C1-A2:.js

// COUNTRY: This is a constant string set to "PHILIPPINES" that will be used in generating the student’s birthplace and address.
// Constants (for formatting or fixed values)
const COUNTRY = "PHILIPPINES";


// This function takes a string str, converts it to lowercase, and then capitalizes the first letter of each word.
// Example: If you pass "hello world", it will return "Hello World".
// This is useful for formatting names, cities, or other location-based strings in a consistent way.
// Function to properly capitalize a string (Regular Case Format)
function toRegularCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to create student information object
// The code then creates three student objects: student1, student2, and student3. These represent different students with various personal details such as
function createStudent(firstName, middleName, lastName, birthdate, birthplaceBarangay, 
  birthplaceCity, birthplaceZipCode, addressBarangay, addressCity, addressZipCode, course, year, dreamJob) {
    return {
        firstName: firstName, middleName: middleName,
        lastName: lastName,
        birthdate: birthdate,
        birthplaceBarangay: birthplaceBarangay,
        birthplaceCity: birthplaceCity,
        birthplaceZipCode: birthplaceZipCode,
        addressBarangay: addressBarangay,
        addressCity: addressCity,
        addressZipCode: addressZipCode,
        course: course,
        year: year,
        dreamJob: dreamJob
    };
}


// Student 1 Information
const student1 = createStudent(
  "jessie",
  "parilla",
  "panagsagan",
  "october 18, 2001",
  "Kinmarin, Salcedo",
  "Ilocos Sur",
  "2711",
  "Talogtog, Candon City",
  "Ilocos Sur",
  "2710",
  "bachelor of science in computer science",
  "1st",
  "software engeneering"
);

// Student 2 Information (Classmate 1)
const student2 = createStudent(
  "lariane",
  "Ancheta",
  "Arquero",
  "November 19, 2005",
  "Balluarte, Salcedo",
  "Ilocos Sur",
  "2711",
  "ISPSC Dormitory dalies, San Nicolas, Candon City ",
  "Ilocos Sur",
  "2710",
  "bachelor of science in computer science",
  "1st",
  "software engeneering"
);


// Student 3 Information (Classmate 2)
const student3 = createStudent(
  "noren joy",
  "sibayan",
  "juan",
  "november 13, 2005",
  "dayanki, burgos",
  "ilococ sur",
  "2724",
  "dayanki, burgos",
  "ilocos sur",
  "2724",
  "bachelor of science information technology",
  "1st",
  "IT specialist"
);


// This function takes a student object as a parameter and returns a formatted string that provides a summary of the student's details.
// It ombines the student's first, middle, and last names into a full name (both in uppercase and lowercase).
// Uses the toRegularCase() function to properly format the student's birthplace and address.
// Formats the course and dream job details as well.
// The result is a string that presents the student’s info in the following format:
function generateStudentInfoString(student) {
  const fullNameUpper = (student.firstName + " " + student.middleName + " " + student.lastName).toUpperCase();
  const fullNameLower = (student.firstName + " " + student.middleName + " " + student.lastName).toLowerCase();

  const birthplace = `${toRegularCase(student.birthplaceBarangay)}, ${toRegularCase(student.birthplaceCity)}, ${COUNTRY}, ${student.birthplaceZipCode}`;
  const address = `${toRegularCase(student.addressBarangay)}, ${toRegularCase(student.addressCity)}, ${COUNTRY}, ${student.addressZipCode}`;
  const courseRegular = toRegularCase(student.course);


  return `[${fullNameUpper}] was born [${toRegularCase(student.birthdate)}] at [${birthplace}], 
  and currently living at [${address}]. [${fullNameLower}] is taking up [${courseRegular}] and dreams to be [${toRegularCase(student.dreamJob)}] after graduation.`;
}

// The console.log() function is used to print the formatted string for each student (student1, student2, and student3) to the console.
console.log(generateStudentInfoString(student1));
console.log(generateStudentInfoString(student2));
console.log(generateStudentInfoString(student3));

