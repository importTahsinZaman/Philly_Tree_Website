//Classification Model:
const input = document.querySelector('input[type = "file"]');

const URL = "https://teachablemachine.withgoogle.com/models/B0IYPLkg-/";
let model, labelContainer;

input.addEventListener(
  "change",
  async function (e) {
    const fileReader = new FileReader();

    fileReader.onload = async function (e) {
      document.getElementById("preview").setAttribute("src", e.target.result);

      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);

      labelContainer = document.getElementById("label-container");

      const prediction = await model.predictTopK(
        document.getElementById("preview")
      );
      classPrediction =
        prediction[0].className + ": " + prediction[0].probability.toFixed(2);
      labelContainer.innerHTML = classPrediction;

      setCookie("tree", prediction[0].className);
      scroll_to_tree(prediction[0].className);
    };

    fileReader.readAsDataURL(input.files[0]);
  },
  false
);
