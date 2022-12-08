const mongoose = require('mongoose');

main().then(()=> {console.log('mongoose is running!')}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://0.0.0.0:27017/task_manager');
  
  
}