const button = document.getElementById("button");
const redImage = document.getElementById("red-image");
const blueImage = document.getElementById("blue-image");
const yellowImage = document.getElementById("yellow-image");

button.onclick = () => {
if (red.checked)
{
redImage.classList.remove("hidden");
redImage.classList.add("eject");
}
if (blue.checked)
{
blueImage.classList.remove("hidden");
blueImage.classList.add("eject");
}
if (yellow.checked)
{
yellowImage.classList.remove("hidden");
yellowImage.classList.add("eject");
}
};