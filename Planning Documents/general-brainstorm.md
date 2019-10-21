PAGES

1. login page
    - user enters name ("Good Luck!" eg.)
    - place to choose skins and difficulty (STRETCH)
    - rules?

2. main game page
    - shows player name
    - shows game photos in a grid
    - drop-down items in a "sentence" ("Does your character have..." + dropdown)
    - area where past questions and answers are maintained
    - feedback area where user questions are answered (YES/NO)
    - rules box (room for this on main page?)
    - "submit guess" button
    - number of guesses remaining (and guesses so far, or strings can be numbered)

3. final result page
    - "you did it in 4 guesses!"
    - "you are out of guesses! try again!"
    - display photo "It was ___!"
    - audio/effect based on how well user did (STRETCH)
    - 'play again' button
    - about us button

4. about us page

FEATURES (MVP unless otherwise specified)

1. save user name and show on game page
2. computer randomly generates/chooses "correct" face
3. dynamically generate grid of faces (random = STRETCH) 
4. array of faces with ids and matching descriptive phrases
5. faces flip over/disappear when clicked (and can be reversed)
6. provide user feedback after each guess (combine with #7?)
7. strings are generated based on past guesses/answers and form a list
8. user can guess a specific character to try to finish the gamre
9. keep track of remaining guesses (out of total)
10. end game if guesses run out OR user guesses correct face
11. generate results page based on win/lose (STRETCH -- special feedback phrases based on winning especially early, etc.)
12. generate all-time all-time stats table with username and wins/losses
13. if user asks the same question twice...? (STRETCH -- do something different with duplicate guesses)
    - MVP: just allow it to be asked twice
    - STRETCH: remove option
14. STRETCH -- actually play against the computer    

GENERAL NOTES

- have user manually select items that are excluded during game
    - hover effect and ability to click again to flip back over (in case of        accidental click)
- have previous questions and answers stay on screen during game somehow
    - (stays in a list that grows, shows in a box, etc.)
- stretch goal of different character sets and stretchier stretch goal of having  matching gameplay screen skins for each set of characters
- where to show rules? (use title tag with rollover to show rules?)