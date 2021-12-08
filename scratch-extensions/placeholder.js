class comment {
  getInfo() {
    return {
      id: "comment",
      name: 'Comment block',
      blocks: [
        {
          opcode: 'comment',
          blockType: Scratch.BlockType.COMMAND,
          text: '// [CMT] //',
          arguments: {
            CMT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'comment'
            }
          }
        },
        {
          opcode: 'placecom',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Placeholder',
            }
          }
        },
        {
          opcode: 'placeboo',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Placeholder',
            }
          }
        }
        {
          opcode: 'placerep',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Placeholder',
            }
          }
        }
      ]
    };
  }
  
   placeboo({}) {
    return false;
  }
  placerep({}) {
    return ;
  }

}

Scratch.extensions.register(new comment());
