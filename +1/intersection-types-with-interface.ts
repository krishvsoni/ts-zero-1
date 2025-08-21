interface student{
    name: string;
}

interface teacher{
    name: string;
    subject: string;
}


type schoolMember = student & teacher;

const member: schoolMember = {
    name: "John",
    subject: "Mathematics"
};

console.log(member);