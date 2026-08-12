
const girias = { name: "Trem" };

localStorage.setItem('giria', JSON.stringify(girias));

const storedData = localStorage.getItem('giria');
if (storedData) {
    const giria = JSON.parse(storedData);
    console.log(giria.name);
}