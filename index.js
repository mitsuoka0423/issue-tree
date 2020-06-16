const axios = require("axios");

const token = "TOKEN_HERE";

const main = async () => {
  const res = await axios("https://git.dmm.com/api/v3/repos/book/PBI/issues?labels=WebGrowth", {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  console.log(res.data);

  res.data.forEach((issue, index) => {
    console.log(index, issue.title);
    // console.log(JSON.stringify(issue.labels));
    issue.labels.forEach((label) => {
      console.log(`  ${label.name}`);
    });
  });
};

main().then(() => {
  console.log("finished");
});
