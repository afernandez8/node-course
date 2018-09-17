const http = require("http"),
  {fork} = require("child_process"),
  hostname = "127.0.0.1",
  port = 8000,
  server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    console.log("Entró a /compute y forkeo..");
    const compute = fork(`${__dirname}/compute.js`);
    compute.send("start");
    compute.on("message", (result) => {
      res.end(`Sum is ${result}`);
      console.log(`Sum is ${result}`);
    });
  } else {
    console.log("Entró a otro route!");
    res.end(`Run http://${hostname}:${port}/compute`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});