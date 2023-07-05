interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}

const majorSubject1: MajorCredits = { credits: 4, brand: "Major" };
const majorSubject2: MajorCredits = { credits: 3, brand: "Major" };
const minorSubject1: MinorCredits = { credits: 2, brand: "Minor" };
const minorSubject2: MinorCredits = { credits: 1, brand: "Minor" };

const sumMajor = sumMajorCredits(majorSubject1, majorSubject2);
const sumMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Sum of Major Credits:", sumMajor.credits); // Sum of Major Credits: 7
console.log("Sum of Minor Credits:", sumMinor.credits); // Sum of Minor Credits: 3

