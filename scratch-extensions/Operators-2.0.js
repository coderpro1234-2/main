class Operators2 {
  getInfo() {
    return {
      id: "Operators2",
      name: 'Operators 2.0',
      blocks: [
        {
          opcode: 'plus',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] + [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
          opcode: 'minus',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] - [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
          opcode: 'times',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] * [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
          opcode: 'divide',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] / [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
          opcode: 'powerof',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] ** [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
           opcode: 'and',
           blockType: Scratch.BlockType.REPORTER,
           text: '[LEFT] & [RIGHT]',
           arguments: {
             LEFT: {
               type: Scratch.ArgumentType.NUMBER,
             },
             RIGHT: {
               type: Scratch.ArgumentType.NUMBER,
            }
          }
        },
        {
            opcode: 'xor',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] ^ [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
            }
          }
        }
      ]
    };
  }
  
  plus({ LEFT, RIGHT }) {
    return LEFT + RIGHT;
  }
  minus({ LEFT, RIGHT }) {
    return LEFT - RIGHT;
   }
  times({ LEFT, RIGHT }) {
    return LEFT * RIGHT;
   }
  divide({ LEFT, RIGHT }) {
    return LEFT / RIGHT;
   }
  powerof({ LEFT, RIGHT }) {
    return LEFT ** RIGHT;
   }
  and({ LEFT, RIGHT }) {
    return LEFT & RIGHT;
   }
  xor({ LEFT, RIGHT }) {
    return LEFT ^ RIGHT;
  }
}

Scratch.extensions.register(new Operators2());
