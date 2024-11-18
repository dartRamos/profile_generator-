const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Nice to meet you ${answer}`);

  rl.question("What is a hobby you enjoy? ", (answer) => {
    console.log(`Wow ${answer} sounds really fun!`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`I'll make sure to listen to ${answer}!`);

      rl.question("Which mean is your favorite? (eg: dinner, brunch, etc) ", (answer) => {
        console.log(`Yum! I can't wait to have some ${answer} later!`); 

        rl.question("What is your favorite thing to eat for that meal? ", (answer) => {
          console.log(`Oh I don't like ${answer} very much.`);

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Playing ${answer} sounds tiring...`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for sharing: ${answer}`);

              rl.close();
            })
          })
        })
      })
    })
  })
});
