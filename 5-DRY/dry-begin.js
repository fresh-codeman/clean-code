// 1.
async function getPostsForUser(userId) {
    const userResponse = await fetch(`/api/user/${userId}`, {
      token: token,
    });
    const user = userResponse.json();
    const postResponse = await fetch(`/api/posts/${user.authorId}`);
    return postResponse.json();
  }
  
async function getCommentsForUser(userId) {
    const userResponse = await fetch(`/api/users/${userId}`, {
      token: token,
    });
    const user = userResponse.json();
    const commentResponse = await fetch(`/api/comments/${user.commentId}`);
    return commentResponse.json();
  } 


// 2.

function addNumbers(number1, number2)
{
    const result = number1 + number2;
        const output = 'The result is ' + result;
        console.log(output);
}

// this function substracts 2 numbers
function substractNumbers(number1, number2){
    
    const result = number1 - number2;
    const output = 'The result is ' + result;
    console.log(output);
}

function doMultiplicationOfNumbers(number1, number2){
    const result = number1 * number2;
    const output = 'The result is ' + result;
    console.log(output);
}

function divideNumbers(x, y){
    const result = number1 / number2;
    const output = 'The result is ' + result;
    console.log(output);
}


// 3.
function addEmployee(){ 
    const user = {
        firstName: 'Rory',
        lastName: 'Millar',
        role: 'Admin'
    }
    
    axios.post('/user', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function addManager(){  
    const user = {
        firstName: 'James',
        lastName: 'Marley',
        role: 'Admin'
    }
    axios.post('/user', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}