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
              defaultValue: '0'
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
              defaultValue: '0'
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
