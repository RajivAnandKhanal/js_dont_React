function Home() {
  const h1 = document.createElement("h1");
  h1.className = "header";
  document.getElementById("root").appendChild(h1);

  const h2 = document.createElement("h2");
  h2.className = "subheader"; //this shit is used to style the h2 tag later in css
  document.getElementById("root").appendChild(h2);

  return (
    <>
      <h1>tour/travel the world with us</h1>
      <h2>
        The most complete tour management system for your tour and hotel booking
      </h2>
    </>
  );
}

export default Home;
