class calc {
  getInfo() {
    return {
      id: "calc",
      name: 'Calculator',
      blocks: [
        {
          opcode: 'calc',
          blockType: Scratch.BlockType.REPORTER,
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
  
  calc({ argu }) {
    return argu + 0;
  }
}

Scratch.extensions.register(new calc());
