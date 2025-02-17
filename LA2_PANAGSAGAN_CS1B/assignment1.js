

// Constants (for formatting or fixed values)
const COUNTRY = "PHILIPPINES";

// Function to properly capitalize a string (Regular Case Format)
function toRegularCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to create student information object
function createStudent(firstName, middleName, lastName, birthdate, birthplaceBarangay, birthplaceCity, birthplaceZipCode, addressBarangay, addressCity, addressZipCode, course, year, dreamJob) {
    return {
        firstName: firstName,
        middleName: middleName,
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
  "jane",
  "marie",
  "smith",
  "july 22, 2001",
  "lualhati",
  "baguio city",
  "2600",
  "trancoville",
  "baguio city",
  "2600",
  "bachelor of science in information technology",
  "3rd",
  "cybersecurity analyst"
);

// Student 3 Information (Classmate 2)
const student3 = createStudent(
  "peter",
  "james",
  "jones",
  "december 10, 2000",
  "campo sioco",
  "baguio city",
  "2600",
  "dizon subdivision",
  "baguio city",
  "2600",
  "bachelor of science in computer engineering",
  "4th",
  "artificial intelligence engineer"
);



// Function to generate output string for a student
function generateStudentInfoString(student) {
  const fullNameUpper = (student.firstName + " " + student.middleName + " " + student.lastName).toUpperCase();
  const fullNameLower = (student.firstName + " " + student.middleName + " " + student.lastName).toLowerCase();

  const birthplace = `${toRegularCase(student.birthplaceBarangay)}, ${toRegularCase(student.birthplaceCity)}, ${COUNTRY}, ${student.birthplaceZipCode}`;
  const address = `${toRegularCase(student.addressBarangay)}, ${toRegularCase(student.addressCity)}, ${COUNTRY}, ${student.addressZipCode}`;
  const courseRegular = toRegularCase(student.course);


  return `[${fullNameUpper}] was born [${toRegularCase(student.birthdate)}] at [${birthplace}], and currently living at [${address}]. [${fullNameLower}] is taking up [${courseRegular}] and dreams to be [${toRegularCase(student.dreamJob)}] after graduation.`;
}


// Generate and print the information strings
console.log(generateStudentInfoString(student1));
console.log(generateStudentInfoString(student2));
console.log(generateStudentInfoString(student3));