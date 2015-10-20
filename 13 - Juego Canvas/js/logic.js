  //Variables
  var ballX = 150,
    ballY = 150,
    ballDX = 2,
    ballDY = 4,
    boardX = 300,
    boardY = 300,
    paddleX = 150,
    paddleH = 10,
    paddleD = boardY - paddleH,
    paddleW = 150,
    canvas,
    ctx,
    gameLoop,
    W = window.innerWidth, // Window's width
    H = window.innerHeight, // Window's height
    restartBtn = {};

  function drawCanvas() {
    canvas = document.getElementById('gameBoard');
    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
      gameLoop = setInterval(drawBall, 16) //funcion nativa que ejecuta cada 16 milisegundos
      window.addEventListener('keydown', controls, true);
    };
  };

  function drawBall() {
    //Clean the board
    ctx.clearRect(0, 0, boardX, boardY);

    //Draw the board
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.rect(0, 0, boardX, boardY);
    ctx.closePath();
    ctx.fill();


    //Draw ball
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    //Draw paddle
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.rect(paddleX, paddleD, paddleW, paddleH);
    ctx.closePath();
    ctx.fill();

    //Move ball
    ballX += ballDX;
    ballY += ballDY;

    //Directioning
    if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15) {
      ballDX = -ballDX;
    };

    if (ballY + ballDY < 15) {
      ballDY = -ballDY;
    } else if (ballY + ballDY > boardY - 15) {
      if (ballX > paddleX && ballX < paddleX + paddleW) {
        ballDY = -ballDY;

      } else {
        clearInterval(gameLoop);

      };

    };

  };

  function controls(e) {
    switch (e.keyCode) {
      case 37: //left
        paddleX = paddleX - 20;
        if (paddleX < 0) {
          paddleX = 0;
        };
        break;

      case 39: //right
        paddleX = paddleX + 20;
        if (paddleX > boardX - paddleW) {
          paddleX = boardX - paddleW;
        };
        break;
    };
  };

  // Restart Button object
  restartBtn = {


    draw: function() {
      ctx.strokeStyle = "white";
      ctx.lineWidth = "2";
      ctx.strokeRect(this.x, this.y, this.w, this.h);

      ctx.font = "18px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStlye = "white";

    }
  };



  // Function to run when the game overs
  function gameOver() {
    ctx.fillStlye = "white";
    ctx.font = "20px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over - ");

    // Show the restart button

  }

  $("#restart-btn").on("click", restartBtn.draw());















  // //Reset Game
  // // function resetVariables() {
  // //   ballX = 150,
  // //     ballY = 150,
  // //     ballDX = 2,
  // //     ballDY = 4,
  // //     boardX = 300,
  // //     boardY = 300,
  // //     paddleX = 150,
  // //     paddleH = 10,
  // //     paddleD = boardY - paddleH,
  // //     paddleW = 150,
  // //     canvas,
  // //     ctx,
  // //     gameLoop;
  // // };

  // // $(".reset-btn").click(function() {
  // //   resetVariables();
  // // });
