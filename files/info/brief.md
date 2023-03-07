# Piazza-Panic
ENG1 project: Creating a single-player game that requires managing the staff around a kitchen, who will be preparing various dishes requested by customers coming into the Piazza Restaurant.

Specific features include:
  - You will switch between three cooks, controlling one at a time by instructing them where to go, and helping them prepare each dish. Your control scheme               
    should allow for:
    - Switching between cooks
    - Moving the cooks
    - Interacting with what’s in front of the cook (chop / flip / grab an ingredient or
      dish / place what they are carrying)
  - Customers will arrive at different intervals, demanding to be served a recipe within a
    given time limit.
  - Two game modes will be supported:
    - A “scenario” mode with a configurable number of customers to be served (default to 5).
    - An "endless" mode where customers will keep arriving more and more often until you lose.
  - Each recipe will require different preparation steps at different "cooking stations". ○ Each preparation step will require the player to take control 
    of the staff member at certain points in time (e.g. flipping a patty so it doesn't burn, orcutting the vegetables for the salad).
    - If they fail the preparation step (e.g. the patty is burnt or the vegetables are not cut well), they will have to repeat the step.
  - There should be recipes at least for salad, burgers, pizzas, and jacket potatoes. For the first two, here are example recipes:
    - Salad: cut lettuce, cut tomatoes, cut onions, serve together.
    - Burger: form patty, fry patty, toast buns, serve together.
  - There should be cooking stations for cutting, baking, frying, and serving.
  - There should be a pantry with “ingredient stations”:
    - Cooks can interact with an ingredient station to add an ingredient to the top of the stack they carry.
    - Cooks carrying ingredients can then interact with a cooking station to drop their top ingredient on it.
    - Ingredients never run out.
  - There should be a counter where customers wait to be served.
  - If a customer has not been served within the time limit, you lose a reputation point.
    - You start with 3 reputation points: you lose the game if you lose all reputation points.
    - The scenario mode is won after the last customer has left, if you still have reputation points left.
    - The endless mode will keep track of the most customers you have managed to serve before losing.
  - Customers will arrive by themselves at first, and after some time they may arrive in pairs or even groups of 3.
  - At the start, only some of the cooking stations will be available, and you will be able to invest some of your earnings to enable the other cooking 
    stations, and call more kitchen staff back from leave.
 
