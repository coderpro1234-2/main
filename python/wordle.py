#!/usr/bin/python3
from random import randrange
words = ["place", "water", "sauce", "pause", "cause", "smell", "drone", "idiot", "shell", "basic", "spell", "jumbo", "wheel", "sound", "words", "order", "plate", "angry", "party", "happy", "plant", "power", "guide", "slide", "phone", "sport", "enter", "patch", "mouse", "atlas", "frame", "graze", "paint", "print", "swing", "audio", "ready", "chief", "touch", "roast", "pizza", "steam", "spout", "count", "wound", "steak", "eagle", "label", "peach", "robot", "above", "admin", "cabin"]
word = words[randrange(1, len(words))]
print("""Wordle
@ = correct letter in the correct place
# = correct letter in the incorrect place
% = not a letter in the word
type "exit" to exit""")
while True:
    i = input("Word:").lower()
    if i == "exit":
        exit()
    elif i == word:
        print("Well Done You Guessed The Word!")
        exit()
    elif len(i) == 5:
        word_info = ""
        count = 0
        for count in range (5):
            if i[count] in word:
                if i[count] == word [count]:
                    word_info = word_info + "@ "
                else:
                    word_info = word_info + "# "
            else:
                word_info = word_info + "% "
        print(word_info)