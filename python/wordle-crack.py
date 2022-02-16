#!/usr/bin/python3
words = ["place", "water", "sauce", "pause", "cause", "smell", "drone", "idiot", "shell", "basic", "spell", "jumbo", "wheel", "sound", "words", "order", "plate", "angry", "party", "happy", "plant", "power", "guide", "slide", "phone", "sport", "enter", "patch", "mouse", "atlas", "frame", "graze", "paint", "print", "swing", "audio", "ready", "chief", "touch", "roast", "pizza", "steam", "spout", "count", "wound", "steak", "eagle", "label", "peach", "robot", "above", "admin", "cabin"]
print("""Wordle Cracker
@ = correct letter in the correct place
# = correct letter in the incorrect place
% = not a letter in the word
type "exit" to exit""")
while True:
    use_words = []
    wordle = input("Word:").lower()
    if wordle == "exit":
        exit()
    wordle2 = input("Outcome Of Word:")
    if wordle2 == "@@@@@":
        print("Well Done You Guessed The Word!")
        exit()
    if len(wordle) == 5 and len(wordle2) == 5:
        for i in range (len(words)):
                entered = True
                word = words[i]
                for i2 in range (5):
                    if wordle2[i2] == "@":
                        if not wordle[i2] == word[i2]:
                            entered = False
                    elif wordle2[i2] == "#":
                        if not wordle[i2] in word:
                            entered = False
                    elif wordle2[i2] == "%":
                        if wordle[i2] in word:
                            entered = False
                if entered == True:
                    use_words.append(word)
    print(use_words)
