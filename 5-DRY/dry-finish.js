// 1.
async function getUser(userId) {
    const response = await fetch(`/api/v2/user/${userId}`, {
      token: token,
    });
    return response.json();
  }
  
async function getPostsForUser(userId) {
    const user = getUser(userId);
    const response = await fetch(`/api/posts/${user.authorId}`);
    return response.json();
  }
  
async function getCommentsForUser(userId) {
    const user = getUser(userId);
    const response = await fetch(`/api/comments/${user.commentId}`);
    return response.json();
  }

// 2. do not repeat your self

function addNumbers(number1, number2){
	const result = number1 + number2;
	displayOutput(result)
}

function substractNumbers(number1, number2){
	const result = number1 - number2;
	displayOutput(result)
}

function multiplyNumbers(number1, number2){
	const result = number1 * number2;
	displayOutput(result)
}

function divideNumbers(number1, number2){
	const result = number1 * number2;
	displayOutput(result)
}

function displayOutput(result){
	const output = 'The result is ' + result;
	console.log(output);
}

// 3.
function saveUserToDatabase(user){
    axios.post('/users', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("there was an error " + error);
  });
}