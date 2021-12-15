class placeh {
  getInfo() {
    return {
      id: "placeh",
      name: 'Placeholder',
      blocks: [
        {
          opcode: 'reporter',
          blockType: Scratch.BlockType.REPORTER,
          text: '[argu]',
          arguments: {
            argu: {
              type: Scratch.ArgumentType.STRING,
            }
          }
        },
        {
          opcode: 'boolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[argu]',
          arguments: {
            argu: {
              type: Scratch.ArgumentType.STRING,
            }
          }
        }
      ]
    };
  }
  
  reporter({ argu }) {
    return argu;
  }
    boolean({ argu }) {
    return argu;
  }
}

Scratch.extensions.register(new placeh());
