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
              type: Scratch.ArgumentType.NUMBER,
            }
          }
        }
      ]
    };
  }
}

Scratch.extensions.register(new comment());
