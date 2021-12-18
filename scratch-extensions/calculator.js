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
    return Number(argu);
  }
}

Scratch.extensions.register(new calc());
