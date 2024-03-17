async function fetchData() {
  try {
      const pokemonName = $("#pokemonName").val().toLowerCase();
      const response = await $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
          method: 'GET',
          dataType: 'json'
      });

      const pokemonNameDisplay = $("#pokemonNameDisplay");
      const pokemonType = $("#pokemonType");
      const pokemonMove = $("#pokemonMove");
      const imgElement = $("#pokemonSprite");

      pokemonNameDisplay.text(response.name);
      pokemonType.text("Type: " + response.types.map(type => type.type.name).join(", "));
      pokemonMove.text("Signature Move: " + response.moves[0].move.name);
      imgElement.attr('src', response.sprites.front_default);
      $("#pokemonInfo").css('display', 'block');
  } catch (error) {
      console.error(error);
      alert("An error occurred while fetching data!");
  }
}
