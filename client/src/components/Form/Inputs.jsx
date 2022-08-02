const inputs = [
 {
    id: 1,
    name: "FistName",
    type: "text",
    placeholder: "First Name",
    label: "First Name",
 },
 {
    id: 2,
    name: "LastName",
    type: 'text',
    placeholder: "Lirst Name",
    label: "Lirst Name",
 },
 {
    id: 3,
    name: "Email",
    type: "email",
    placeholder: "Email",
    label: "Email",
 },
 {
    id: 4,
    name: "Age",
    type: "number",
    placeholder: "Age",
    label: "Age",
    min: 0,
    max: 100,
 },
 {
    id: 5,
    name: "Phone",
    type: "tel",
    placeholder: "Phone",
    label: "Phone",
 },
 {
    id: 6,
    name: "Password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    min: 6,
    max: 16,
 },
];

export default inputs;