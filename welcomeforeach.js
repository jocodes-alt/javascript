function sendWelcomeEmail(email){
  console.log(`welcome email sent to ${email}`);
}
const users =[
  {name: 'Alice', email: 'alice@gmail.com'},
  {name: 'JOSEPH', email: 'jolad@gmail.com'},

];
users.forEach((user)=>{sendWelcomeEmail(user.email);

});