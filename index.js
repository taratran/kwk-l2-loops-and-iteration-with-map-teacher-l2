// Code your solution in this file.
//Challenge 1
function lowerCaseStudentNames (list) {
  return list.map(function (student) {
    return student.toLowerCase();
  });
}

lowerCaseStudentNames (['Isabella', 'Aarushi', 'Alicia'])


//Challenge 2
function nameToAttributes (list) {
  return list.map(function (person) {
    const personFirst = person.split(' ')[0];
    const personLast = person.split(' ')[1];

    return { firstName: personFirst, lastName: personLast };
  });
}

nameToAttributes (['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman'])

//Challenge 3
function attributesToPhrase(student) {
  return student.map(function (student) {
    return `${student.name} is from ${student.hometown}`;
  });
}

attributesToPhrase ([
  { name: 'Mary',   hometown: 'Allegheny'  },
  { name: 'Joan',   hometown: 'Chicago'    },
  { name: 'Eva',   hometown: 'Hamburg'   }
])
