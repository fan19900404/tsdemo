import api = require("./api");
const go = async () => {
  let res = await api.remote_get("http://m.51wakeup.com/");
  console.log(res.text);
};
go();
