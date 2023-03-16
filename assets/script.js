const btnLoad = document.getElementById(load);
const btnLoadSecondary = document.getElementById(loadSecondary);
const authCode = "03rH7VzkeWGeuvsFMfJmEJmLFgXSeVMG65MOf9RqF8PaYwAuCOIRLBfT";

const getImages = async () => {
  try {
    const resp = await fetch("https://api.pexels.com/v1/search?query=wedding", {
      headers: {
        Authorization: "03rH7VzkeWGeuvsFMfJmEJmLFgXSeVMG65MOf9RqF8PaYwAuCOIRLBfT",
      },
    });

    const list = await resp.json();
    console.log(list);

    const resp2 = await fetch("https://api.pexels.com/v1/search?query=ocean", {
      headers: {
        Authorization: "03rH7VzkeWGeuvsFMfJmEJmLFgXSeVMG65MOf9RqF8PaYwAuCOIRLBfT",
      },
    });

    const list2 = await resp2.json();
    console.log(list2);
  } catch (error) {
    console.log(error);
  }
};

window.onload = getImages;
