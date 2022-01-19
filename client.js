const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT, 
  });
  
  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on("connect", () => {
    conn.write('Name: PAX');
    console.log("connected");
  });


  conn.on('end', () => {
    console.log('disconnected from server');
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = connect;